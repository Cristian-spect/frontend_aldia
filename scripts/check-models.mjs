import '@angular/compiler';
import ts from 'typescript';
import assert from 'node:assert/strict';
import { readFile, writeFile, mkdtemp, rm } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
const temp = await mkdtemp(new URL('../.verification-',import.meta.url));
try {
  for (const [source,name] of [['core/noticias.ts','noticias'],['core/favoritos.service.ts','favoritos'],['pages/contacto.component.ts','contacto']]) {
    const text = await readFile(new URL('../src/app/'+source,import.meta.url),'utf8');
    const result = ts.transpileModule(text,{compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.ES2022,experimentalDecorators:true}}).outputText.replace("'./noticias'","'./noticias.mjs'");
    await writeFile(temp+'/'+name+'.mjs',result);
  }
  const store = new Map();
  globalThis.localStorage = {getItem:k=>store.get(k) ?? null,setItem:(k,v)=>store.set(k,v)};
  const {NOTICIAS} = await import(pathToFileURL(temp+'/noticias.mjs'));
  const {FavoritosService} = await import(pathToFileURL(temp+'/favoritos.mjs'));
  const {ContactoComponent} = await import(pathToFileURL(temp+'/contacto.mjs'));
  assert.equal(NOTICIAS.length,8);assert.equal(new Set(NOTICIAS.map(n=>n.id)).size,8);
  for (const cat of ['educacion','tecnologia','turismo','comercial']) assert.equal(NOTICIAS.filter(n=>n.categoria===cat).length,2);
  const fav = new FavoritosService();assert.equal(fav.favoritos().length,0);fav.toggle(NOTICIAS[0]);assert(fav.contiene(1));assert(new FavoritosService().contiene(1));fav.toggle(NOTICIAS[0]);assert(!fav.contiene(1));fav.toggle(NOTICIAS[1]);fav.quitar(2);assert.equal(fav.favoritos().length,0);
  store.set('favs','invalid JSON');assert.equal(new FavoritosService().favoritos().length,0);
  store.set('favs',JSON.stringify([{id:1},{id:1},{id:999}]));assert.equal(new FavoritosService().favoritos().length,1);
  globalThis.localStorage.setItem=()=>{throw Error('Quota');};const blocked = new FavoritosService();blocked.toggle(NOTICIAS[1]);assert(blocked.error());assert(!blocked.contiene(2));
  const contacto=new ContactoComponent();contacto.enviar();assert(contacto.error('nombre'));assert(contacto.error('correo'));assert(contacto.error('mensaje'));assert(!contacto.confirmacion());
  contacto.form.setValue({nombre:'   ',correo:'incorrecto',mensaje:'   '});contacto.enviar();assert(contacto.form.invalid);
  contacto.form.setValue({nombre:'Cristian',correo:' cristian@example.com ',mensaje:'Hola'});contacto.enviar();assert(contacto.confirmacion());assert.equal(contacto.form.controls.nombre.value,'');contacto.ngOnDestroy();
  console.log('PASS: datos, categorías, favoritos, persistencia, eliminación, JSON inválido, duplicados, error de almacenamiento, formulario vacío, espacios, correo inválido y formulario válido.');
} finally { await rm(temp,{recursive:true,force:true}); }

(globalThis.webpackChunkproton_pass_extension=globalThis.webpackChunkproton_pass_extension||[]).push([[183],{8290:(t,e,r)=>{"use strict";r.d(e,{WS:()=>IllegalStateError,_B:()=>SecurityError,mG:()=>IllegalArgumentError});class IllegalStateError extends Error{constructor(...t){super(...t),Object.create(Error.prototype,{name:{value:"IllegalStateError"}})}}class IllegalArgumentError extends Error{constructor(...t){super(...t),Object.create(Error.prototype,{name:{value:"IllegalArgumentError"}})}}class SecurityError extends Error{constructor(...t){super(...t),Object.create(Error.prototype,{name:{value:"SecurityError"}})}}},6657:(t,e,r)=>{"use strict";r.d(e,{eJ:()=>joinBytes,qG:()=>_heap_init,si:()=>is_bytes,w5:()=>_heap_write});"undefined"==typeof atob||atob,"undefined"==typeof btoa||btoa;function is_bytes(t){return t instanceof Uint8Array}function _heap_init(t,e){const r=t?t.byteLength:e||65536;if(4095&r||r<=0)throw new Error("heap size must be a positive integer and a multiple of 4096");return t=t||new Uint8Array(new ArrayBuffer(r))}function _heap_write(t,e,r,n,s){const i=t.length-e,a=i<s?i:s;return t.set(r.subarray(n,n+a),e),a}function joinBytes(...t){const e=t.reduce(((t,e)=>t+e.length),0),r=new Uint8Array(e);let n=0;for(let e=0;e<t.length;e++)r.set(t[e],n),n+=t[e].length;return r}},7959:(t,e,r)=>{"use strict";r.d(e,{AES256:()=>c});
/**
 * @file {@link http://asmjs.org Asm.js} implementation of the {@link https://en.wikipedia.org/wiki/Advanced_Encryption_Standard Advanced Encryption Standard}.
 * @author Artem S Vybornov <vybornov@gmail.com>
 * @license MIT
 */
var n=function(){var t,e,r=!1;function gmul(r,n){var s=t[(e[r]+e[n])%255];return 0!==r&&0!==n||(s=0),s}var n,s,i,a,o=!1;function aes_init(){function _s(r){var n,s,i;for(s=i=function ginv(r){var n=t[255-e[r]];return 0===r&&(n=0),n}(r),n=0;n<4;n++)i^=s=255&(s<<1|s>>>7);return i^=99}r||function ginit(){t=[],e=[];var n,s,i=1;for(n=0;n<255;n++)t[n]=i,s=128&i,i<<=1,i&=255,128===s&&(i^=27),i^=t[n],e[t[n]]=n;t[255]=t[0],e[0]=0,r=!0}(),n=[],s=[],i=[[],[],[],[]],a=[[],[],[],[]];for(var c=0;c<256;c++){var _=_s(c);n[c]=_,s[_]=c,i[0][c]=gmul(2,_)<<24|_<<16|_<<8|gmul(3,_),a[0][_]=gmul(14,c)<<24|gmul(9,c)<<16|gmul(13,c)<<8|gmul(11,c);for(var u=1;u<4;u++)i[u][c]=i[u-1][c]>>>8|i[u-1][c]<<24,a[u][_]=a[u-1][_]>>>8|a[u-1][_]<<24}o=!0}var wrapper=function(t,e){o||aes_init();var r=new Uint32Array(e);r.set(n,512),r.set(s,768);for(var c=0;c<4;c++)r.set(i[c],4096+1024*c>>2),r.set(a[c],8192+1024*c>>2);var _=function(t,e,r){"use asm";var n=0,s=0,i=0,a=0,o=0,c=0,_=0,u=0,h=0,f=0,p=0,l=0,g=0,y=0,d=0,m=0,b=0,v=0,A=0,E=0,w=0;var x=new t.Uint32Array(r),C=new t.Uint8Array(r);function _core(t,e,r,o,c,_,u,h){t=t|0;e=e|0;r=r|0;o=o|0;c=c|0;_=_|0;u=u|0;h=h|0;var f=0,p=0,l=0,g=0,y=0,d=0,m=0,b=0;f=r|0x400,p=r|0x800,l=r|0xc00;c=c^x[(t|0)>>2],_=_^x[(t|4)>>2],u=u^x[(t|8)>>2],h=h^x[(t|12)>>2];for(b=16;(b|0)<=o<<4;b=b+16|0){g=x[(r|c>>22&1020)>>2]^x[(f|_>>14&1020)>>2]^x[(p|u>>6&1020)>>2]^x[(l|h<<2&1020)>>2]^x[(t|b|0)>>2],y=x[(r|_>>22&1020)>>2]^x[(f|u>>14&1020)>>2]^x[(p|h>>6&1020)>>2]^x[(l|c<<2&1020)>>2]^x[(t|b|4)>>2],d=x[(r|u>>22&1020)>>2]^x[(f|h>>14&1020)>>2]^x[(p|c>>6&1020)>>2]^x[(l|_<<2&1020)>>2]^x[(t|b|8)>>2],m=x[(r|h>>22&1020)>>2]^x[(f|c>>14&1020)>>2]^x[(p|_>>6&1020)>>2]^x[(l|u<<2&1020)>>2]^x[(t|b|12)>>2];c=g,_=y,u=d,h=m}n=x[(e|c>>22&1020)>>2]<<24^x[(e|_>>14&1020)>>2]<<16^x[(e|u>>6&1020)>>2]<<8^x[(e|h<<2&1020)>>2]^x[(t|b|0)>>2],s=x[(e|_>>22&1020)>>2]<<24^x[(e|u>>14&1020)>>2]<<16^x[(e|h>>6&1020)>>2]<<8^x[(e|c<<2&1020)>>2]^x[(t|b|4)>>2],i=x[(e|u>>22&1020)>>2]<<24^x[(e|h>>14&1020)>>2]<<16^x[(e|c>>6&1020)>>2]<<8^x[(e|_<<2&1020)>>2]^x[(t|b|8)>>2],a=x[(e|h>>22&1020)>>2]<<24^x[(e|c>>14&1020)>>2]<<16^x[(e|_>>6&1020)>>2]<<8^x[(e|u<<2&1020)>>2]^x[(t|b|12)>>2]}function _ecb_enc(t,e,r,n){t=t|0;e=e|0;r=r|0;n=n|0;_core(0x0000,0x0800,0x1000,w,t,e,r,n)}function _ecb_dec(t,e,r,n){t=t|0;e=e|0;r=r|0;n=n|0;var i=0;_core(0x0400,0x0c00,0x2000,w,t,n,r,e);i=s,s=a,a=i}function _cbc_enc(t,e,r,h){t=t|0;e=e|0;r=r|0;h=h|0;_core(0x0000,0x0800,0x1000,w,o^t,c^e,_^r,u^h);o=n,c=s,_=i,u=a}function _cbc_dec(t,e,r,h){t=t|0;e=e|0;r=r|0;h=h|0;var f=0;_core(0x0400,0x0c00,0x2000,w,t,h,r,e);f=s,s=a,a=f;n=n^o,s=s^c,i=i^_,a=a^u;o=t,c=e,_=r,u=h}function _cfb_enc(t,e,r,h){t=t|0;e=e|0;r=r|0;h=h|0;_core(0x0000,0x0800,0x1000,w,o,c,_,u);o=n=n^t,c=s=s^e,_=i=i^r,u=a=a^h}function _cfb_dec(t,e,r,h){t=t|0;e=e|0;r=r|0;h=h|0;_core(0x0000,0x0800,0x1000,w,o,c,_,u);n=n^t,s=s^e,i=i^r,a=a^h;o=t,c=e,_=r,u=h}function _ofb(t,e,r,h){t=t|0;e=e|0;r=r|0;h=h|0;_core(0x0000,0x0800,0x1000,w,o,c,_,u);o=n,c=s,_=i,u=a;n=n^t,s=s^e,i=i^r,a=a^h}function _ctr(t,e,r,o){t=t|0;e=e|0;r=r|0;o=o|0;_core(0x0000,0x0800,0x1000,w,h,f,p,l);l=~m&l|m&l+1;p=~d&p|d&p+((l|0)==0);f=~y&f|y&f+((p|0)==0);h=~g&h|g&h+((f|0)==0);n=n^t;s=s^e;i=i^r;a=a^o}function _gcm_mac(t,e,r,n){t=t|0;e=e|0;r=r|0;n=n|0;var s=0,i=0,a=0,h=0,f=0,p=0,l=0,g=0,y=0,d=0;t=t^o,e=e^c,r=r^_,n=n^u;s=b|0,i=v|0,a=A|0,h=E|0;for(;(y|0)<128;y=y+1|0){if(s>>>31){f=f^t,p=p^e,l=l^r,g=g^n}s=s<<1|i>>>31,i=i<<1|a>>>31,a=a<<1|h>>>31,h=h<<1;d=n&1;n=n>>>1|r<<31,r=r>>>1|e<<31,e=e>>>1|t<<31,t=t>>>1;if(d)t=t^0xe1000000}o=f,c=p,_=l,u=g}function set_rounds(t){t=t|0;w=t}function set_state(t,e,r,o){t=t|0;e=e|0;r=r|0;o=o|0;n=t,s=e,i=r,a=o}function set_iv(t,e,r,n){t=t|0;e=e|0;r=r|0;n=n|0;o=t,c=e,_=r,u=n}function set_nonce(t,e,r,n){t=t|0;e=e|0;r=r|0;n=n|0;h=t,f=e,p=r,l=n}function set_mask(t,e,r,n){t=t|0;e=e|0;r=r|0;n=n|0;g=t,y=e,d=r,m=n}function set_counter(t,e,r,n){t=t|0;e=e|0;r=r|0;n=n|0;l=~m&l|m&n,p=~d&p|d&r,f=~y&f|y&e,h=~g&h|g&t}function get_state(t){t=t|0;if(t&15)return-1;C[t|0]=n>>>24,C[t|1]=n>>>16&255,C[t|2]=n>>>8&255,C[t|3]=n&255,C[t|4]=s>>>24,C[t|5]=s>>>16&255,C[t|6]=s>>>8&255,C[t|7]=s&255,C[t|8]=i>>>24,C[t|9]=i>>>16&255,C[t|10]=i>>>8&255,C[t|11]=i&255,C[t|12]=a>>>24,C[t|13]=a>>>16&255,C[t|14]=a>>>8&255,C[t|15]=a&255;return 16}function get_iv(t){t=t|0;if(t&15)return-1;C[t|0]=o>>>24,C[t|1]=o>>>16&255,C[t|2]=o>>>8&255,C[t|3]=o&255,C[t|4]=c>>>24,C[t|5]=c>>>16&255,C[t|6]=c>>>8&255,C[t|7]=c&255,C[t|8]=_>>>24,C[t|9]=_>>>16&255,C[t|10]=_>>>8&255,C[t|11]=_&255,C[t|12]=u>>>24,C[t|13]=u>>>16&255,C[t|14]=u>>>8&255,C[t|15]=u&255;return 16}function gcm_init(){_ecb_enc(0,0,0,0);b=n,v=s,A=i,E=a}function cipher(t,e,r){t=t|0;e=e|0;r=r|0;var o=0;if(e&15)return-1;while((r|0)>=16){U[t&7](C[e|0]<<24|C[e|1]<<16|C[e|2]<<8|C[e|3],C[e|4]<<24|C[e|5]<<16|C[e|6]<<8|C[e|7],C[e|8]<<24|C[e|9]<<16|C[e|10]<<8|C[e|11],C[e|12]<<24|C[e|13]<<16|C[e|14]<<8|C[e|15]);C[e|0]=n>>>24,C[e|1]=n>>>16&255,C[e|2]=n>>>8&255,C[e|3]=n&255,C[e|4]=s>>>24,C[e|5]=s>>>16&255,C[e|6]=s>>>8&255,C[e|7]=s&255,C[e|8]=i>>>24,C[e|9]=i>>>16&255,C[e|10]=i>>>8&255,C[e|11]=i&255,C[e|12]=a>>>24,C[e|13]=a>>>16&255,C[e|14]=a>>>8&255,C[e|15]=a&255;o=o+16|0,e=e+16|0,r=r-16|0}return o|0}function mac(t,e,r){t=t|0;e=e|0;r=r|0;var n=0;if(e&15)return-1;while((r|0)>=16){S[t&1](C[e|0]<<24|C[e|1]<<16|C[e|2]<<8|C[e|3],C[e|4]<<24|C[e|5]<<16|C[e|6]<<8|C[e|7],C[e|8]<<24|C[e|9]<<16|C[e|10]<<8|C[e|11],C[e|12]<<24|C[e|13]<<16|C[e|14]<<8|C[e|15]);n=n+16|0,e=e+16|0,r=r-16|0}return n|0}var U=[_ecb_enc,_ecb_dec,_cbc_enc,_cbc_dec,_cfb_enc,_cfb_dec,_ofb,_ctr];var S=[_cbc_enc,_gcm_mac];return{set_rounds,set_state,set_iv,set_nonce,set_mask,set_counter,get_state,get_iv,gcm_init,cipher,mac}}({Uint8Array,Uint32Array},t,e);return _.set_key=function set_key(t,e,s,i,o,c,u,h,f){var p=r.subarray(0,60),l=r.subarray(256,316);p.set([e,s,i,o,c,u,h,f]);for(var g=t,y=1;g<4*t+28;g++){var d=p[g-1];(g%t==0||8===t&&g%t==4)&&(d=n[d>>>24]<<24^n[d>>>16&255]<<16^n[d>>>8&255]<<8^n[255&d]),g%t==0&&(d=d<<8^d>>>24^y<<24,y=y<<1^(128&y?27:0)),p[g]=p[g-t]^d}for(var m=0;m<g;m+=4)for(var b=0;b<4;b++){d=p[g-(4+m)+(4-b)%4];l[m+b]=m<4||m>=g-4?d:a[0][n[d>>>24]]^a[1][n[d>>>16&255]]^a[2][n[d>>>8&255]]^a[3][n[255&d]]}_.set_rounds(t+5)},_};return wrapper.ENC={ECB:0,CBC:2,CFB:4,OFB:6,CTR:7},wrapper.DEC={ECB:1,CBC:3,CFB:5,OFB:6,CTR:7},wrapper.MAC={CBC:0,GCM:1},wrapper.HEAP_DATA=16384,wrapper}(),s=r(6657),i=r(8290);const a=[],o=[];class AES{constructor(t,e,r=!0,n,s,i){this.pos=0,this.len=0,this.mode=n,this.pos=0,this.len=0,this.key=t,this.iv=e,this.padding=r,this.acquire_asm(s,i)}acquire_asm(t,e){return void 0!==this.heap&&void 0!==this.asm||(this.heap=t||a.pop()||(0,s.qG)().subarray(n.HEAP_DATA),this.asm=e||o.pop()||new n(null,this.heap.buffer),this.reset(this.key,this.iv)),{heap:this.heap,asm:this.asm}}release_asm(){void 0!==this.heap&&void 0!==this.asm&&(a.push(this.heap),o.push(this.asm)),this.heap=void 0,this.asm=void 0}reset(t,e){const{asm:r}=this.acquire_asm(),n=t.length;if(16!==n&&24!==n&&32!==n)throw new i.mG("illegal key size");const s=new DataView(t.buffer,t.byteOffset,t.byteLength);if(r.set_key(n>>2,s.getUint32(0),s.getUint32(4),s.getUint32(8),s.getUint32(12),n>16?s.getUint32(16):0,n>16?s.getUint32(20):0,n>24?s.getUint32(24):0,n>24?s.getUint32(28):0),void 0!==e){if(16!==e.length)throw new i.mG("illegal iv size");let t=new DataView(e.buffer,e.byteOffset,e.byteLength);r.set_iv(t.getUint32(0),t.getUint32(4),t.getUint32(8),t.getUint32(12))}else r.set_iv(0,0,0,0)}AES_Encrypt_process(t){if(!(0,s.si)(t))throw new TypeError("data isn't of expected type");let{heap:e,asm:r}=this.acquire_asm(),i=n.ENC[this.mode],a=n.HEAP_DATA,o=this.pos,c=this.len,_=0,u=t.length||0,h=0,f=0,p=new Uint8Array(c+u&-16);for(;u>0;)f=(0,s.w5)(e,o+c,t,_,u),c+=f,_+=f,u-=f,f=r.cipher(i,a+o,c),f&&p.set(e.subarray(o,o+f),h),h+=f,f<c?(o+=f,c-=f):(o=0,c=0);return this.pos=o,this.len=c,p}AES_Encrypt_finish(){let{heap:t,asm:e}=this.acquire_asm(),r=n.ENC[this.mode],s=n.HEAP_DATA,a=this.pos,o=this.len,c=16-o%16,_=o;if(this.hasOwnProperty("padding")){if(this.padding){for(let e=0;e<c;++e)t[a+o+e]=c;o+=c,_=o}else if(o%16)throw new i.mG("data length must be a multiple of the block size")}else o+=c;const u=new Uint8Array(_);return o&&e.cipher(r,s+a,o),_&&u.set(t.subarray(a,a+_)),this.pos=0,this.len=0,this.release_asm(),u}AES_Decrypt_process(t){if(!(0,s.si)(t))throw new TypeError("data isn't of expected type");let{heap:e,asm:r}=this.acquire_asm(),i=n.DEC[this.mode],a=n.HEAP_DATA,o=this.pos,c=this.len,_=0,u=t.length||0,h=0,f=c+u&-16,p=0,l=0;this.padding&&(p=c+u-f||16,f-=p);const g=new Uint8Array(f);for(;u>0;)l=(0,s.w5)(e,o+c,t,_,u),c+=l,_+=l,u-=l,l=r.cipher(i,a+o,c-(u?0:p)),l&&g.set(e.subarray(o,o+l),h),h+=l,l<c?(o+=l,c-=l):(o=0,c=0);return this.pos=o,this.len=c,g}AES_Decrypt_finish(){let{heap:t,asm:e}=this.acquire_asm(),r=n.DEC[this.mode],s=n.HEAP_DATA,a=this.pos,o=this.len,c=o;if(o>0){if(o%16){if(this.hasOwnProperty("padding"))throw new i.mG("data length must be a multiple of the block size");o+=16-o%16}if(e.cipher(r,s+a,o),this.hasOwnProperty("padding")&&this.padding){let e=t[a+c-1];if(e<1||e>16||e>c)throw new i._B("bad padding");let r=0;for(let n=e;n>1;n--)r|=e^t[a+c-n];if(r)throw new i._B("bad padding");c-=e}}const _=new Uint8Array(c);return c>0&&_.set(t.subarray(a,a+c)),this.pos=0,this.len=0,this.release_asm(),_}}class AES_CFB{static encrypt(t,e,r){return new AES_CFB(e,r).encrypt(t)}static decrypt(t,e,r){return new AES_CFB(e,r).decrypt(t)}constructor(t,e,r){this.aes=r||new AES(t,e,!0,"CFB"),delete this.aes.padding}encrypt(t){const e=this.aes.AES_Encrypt_process(t),r=this.aes.AES_Encrypt_finish();return(0,s.eJ)(e,r)}decrypt(t){const e=this.aes.AES_Decrypt_process(t),r=this.aes.AES_Decrypt_finish();return(0,s.eJ)(e,r)}}const c={blockSize:16,decrypt:(t,e,r)=>AES_CFB.decrypt(t,e,r)}},5820:()=>{}}]);
//# sourceMappingURL=chunk.183.js.map
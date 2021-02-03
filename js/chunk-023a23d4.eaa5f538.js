(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-023a23d4"],{2407:function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"text-field my-2"},[e.label?r("label",{staticClass:"block text-gray-800 mb-1",attrs:{for:e.componentId}},[e._v(e._s(e.label))]):e._e(),r("div",{staticClass:"relative"},[e.prependIcon?r("i",{staticClass:"cursor-pointer text-gray-600 text-lg absolute left-3 top-1/2 transform -translate-y-1/2",class:e.prependIcon,on:{click:e.emitClickPrependEvent}}):e._e(),e.appendIcon?r("i",{staticClass:"cursor-pointer text-gray-600 text-lg absolute right-3 top-1/2 transform -translate-y-1/2",class:e.appendIcon,on:{click:e.emitClickAppendEvent}}):e._e(),r("input",{staticClass:"px-3 w-full text-gray-700 rounded border border-gray-300 outline-none transition",class:[{"pl-9":e.prependIcon,"pr-9":e.appendIcon,"border-red-500":e.errorMessage,"focus:border-gray-400 focus:ring-4 focus:ring-green-500 focus:ring-opacity-40":!e.errorMessage}],attrs:{id:e.componentId,type:e.type,name:e.name,placeholder:e.placeholder,required:e.required,autocomplete:e.autocomplete},on:{input:function(t){return e.emitInputevent(t.target.value)}}})]),e.errorMessage?r("p",{staticClass:"mb-0 text-sm text-red-500"},[e._v(" "+e._s(e.errorMessage)+" ")]):e._e()])},o=[],n={props:{type:{type:String,default:"text"},name:{type:String,default:void 0},required:{type:Boolean,default:void 0},placeholder:{type:String,default:void 0},autocomplete:{type:String,default:"on"},prependIcon:{type:String,default:void 0},appendIcon:{type:String,default:void 0},label:{type:String,default:null},errorMessage:{type:[String,Array],default:null}},computed:{componentId:function(){return this._uid}},methods:{emitClickPrependEvent:function(e){this.$emit("click:prepend",e)},emitClickAppendEvent:function(e){this.$emit("click:append",e)},emitInputevent:function(e){this.$emit("input",e)}}},a=n,i=(r("6632"),r("2877")),l=Object(i["a"])(a,s,o,!1,null,"07584975",null);t["a"]=l.exports},6632:function(e,t,r){"use strict";r("b7cc")},"73cf":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"max-w-sm mx-auto",attrs:{id:"register-page"}},[e._m(0),r("div",{staticClass:"bg-white rounded-lg py-3 px-5 w-full"},[r("form",{on:{submit:function(t){return t.preventDefault(),e.formSubmitHandler(t)}}},[r("text-field",{attrs:{label:"Username",name:"username",placeholder:"Username","prepend-icon":"mdi mdi-account","error-message":e.errorMessages.username},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}}),r("text-field",{attrs:{type:e.showPassword?"text":"password",label:"Password",name:"password",placeholder:"Password","prepend-icon":"mdi mdi-lock","append-icon":e.showPassword?"mdi mdi-eye":"mdi mdi-eye-off","error-message":e.errorMessages.password},on:{"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),r("text-field",{attrs:{type:e.showPasswordConfirmation?"text":"password",label:"Confirm Password",name:"password_confirmation",placeholder:"Confirm Password","prepend-icon":"mdi mdi-lock","append-icon":e.showPasswordConfirmation?"mdi mdi-eye":"mdi mdi-eye-off"},on:{"click:append":function(t){e.showPasswordConfirmation=!e.showPasswordConfirmation}},model:{value:e.form.password_confirmation,callback:function(t){e.$set(e.form,"password_confirmation",t)},expression:"form.password_confirmation"}}),r("button",{staticClass:"mt-1 px-3 py-1 rounded w-full bg-green-500 focus:outline-none hover:bg-green-400",attrs:{type:"submit"}},[e._v(" Register ")])],1)]),r("p",{staticClass:"text-center mt-2"},[e._v(" Already have an account ? "),r("router-link",{staticClass:"text-green-300",attrs:{to:"/login"}},[e._v("Sign in")])],1)])},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",{staticClass:"text-center text-3xl font-medium uppercase mb-3"},[r("i",{staticClass:"mdi mdi-rocket-launch"}),e._v(" Register ")])}],n=r("2407"),a={components:{TextField:n["a"]},data:function(){return{form:{username:null,password:null,password_confirmation:null},errorMessages:{username:null,password:null},showPassword:!1,showPasswordConfirmation:!1}},methods:{validateField:function(){var e=!0;for(var t in this.errorMessages)this.form[t]&&this.form[t].length?this.errorMessages[t]=null:(e=!1,this.errorMessages[t]="The ".concat(t," field is required."));return this.form.password!==this.form.password_confirmation&&(e=!1,this.errorMessages.password="The confirm password field does not match."),e},formSubmitHandler:function(){this.validateField()&&this.$router.push("/")}}},i=a,l=r("2877"),d=Object(l["a"])(i,s,o,!1,null,null,null);t["default"]=d.exports},b7cc:function(e,t,r){}}]);
//# sourceMappingURL=chunk-023a23d4.eaa5f538.js.map
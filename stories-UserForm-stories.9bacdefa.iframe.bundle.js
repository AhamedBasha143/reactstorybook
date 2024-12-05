/*! For license information please see stories-UserForm-stories.9bacdefa.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_storybook_new=self.webpackChunkmy_storybook_new||[]).push([[2356],{"./src/stories/UserForm.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultForm:()=>DefaultForm,__namedExportsOrder:()=>__namedExportsOrder,default:()=>UserForm_stories});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const UserForm_UserForm=_ref=>{let{onSubmit,onCancel}=_ref;const[formData,setFormData]=(0,react.useState)({username:"",password:"",age:"",dateOfBirth:"",gender:"",hobbies:[]}),[errors,setErrors]=(0,react.useState)({}),handleChange=e=>{const{name,value,type,checked}=e.target;setFormData("checkbox"===type?prevData=>({...prevData,hobbies:checked?[...prevData.hobbies,value]:prevData.hobbies.filter((hobby=>hobby!==value))}):prevData=>({...prevData,[name]:value}))};return(0,jsx_runtime.jsxs)("form",{className:"user-form",onSubmit:e=>{e.preventDefault();const newErrors=(()=>{const newErrors={};return formData.username||(newErrors.username="Username is required"),formData.password||(newErrors.password="Password is required"),formData.age||(newErrors.age="Age is required"),formData.dateOfBirth||(newErrors.dateOfBirth="Date of Birth is required"),formData.gender||(newErrors.gender="Gender is required"),0===formData.hobbies.length&&(newErrors.hobbies="At least one hobby is required"),newErrors})();0===Object.keys(newErrors).length?(onSubmit(formData),setFormData({username:"",password:"",age:"",dateOfBirth:"",gender:"",hobbies:[]}),setErrors({})):setErrors(newErrors)},children:[(0,jsx_runtime.jsx)("h2",{children:"User Form"}),(0,jsx_runtime.jsxs)("div",{className:"form-group",children:[(0,jsx_runtime.jsx)("label",{htmlFor:"username",children:"Username"}),(0,jsx_runtime.jsx)("input",{type:"text",id:"username",name:"username",value:formData.username,onChange:handleChange,required:!0}),errors.username&&(0,jsx_runtime.jsx)("span",{className:"error",children:errors.username})]}),(0,jsx_runtime.jsxs)("div",{className:"form-group",children:[(0,jsx_runtime.jsx)("label",{htmlFor:"password",children:"Password"}),(0,jsx_runtime.jsx)("input",{type:"password",id:"password",name:"password",value:formData.password,onChange:handleChange,required:!0}),errors.password&&(0,jsx_runtime.jsx)("span",{className:"error",children:errors.password})]}),(0,jsx_runtime.jsxs)("div",{className:"form-group",children:[(0,jsx_runtime.jsx)("label",{htmlFor:"age",children:"Age"}),(0,jsx_runtime.jsxs)("select",{id:"age",name:"age",value:formData.age,onChange:handleChange,required:!0,class:"selectWidth",children:[(0,jsx_runtime.jsx)("option",{value:"",children:"Select age"}),[...Array(100).keys()].map((age=>(0,jsx_runtime.jsx)("option",{value:age+1,children:age+1},age)))]}),errors.age&&(0,jsx_runtime.jsx)("span",{className:"error",children:errors.age})]}),(0,jsx_runtime.jsxs)("div",{className:"form-group",children:[(0,jsx_runtime.jsx)("label",{htmlFor:"dateOfBirth",children:"Date of Birth"}),(0,jsx_runtime.jsx)("input",{type:"date",id:"dateOfBirth",name:"dateOfBirth",value:formData.dateOfBirth,onChange:handleChange,required:!0}),errors.dateOfBirth&&(0,jsx_runtime.jsx)("span",{className:"error",children:errors.dateOfBirth})]}),(0,jsx_runtime.jsxs)("div",{className:"form-group",children:[(0,jsx_runtime.jsx)("label",{children:"Gender"}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)("label",{children:[(0,jsx_runtime.jsx)("input",{type:"radio",name:"gender",value:"male",checked:"male"===formData.gender,onChange:handleChange,required:!0}),"Male"]}),(0,jsx_runtime.jsxs)("label",{children:[(0,jsx_runtime.jsx)("input",{type:"radio",name:"gender",value:"female",checked:"female"===formData.gender,onChange:handleChange,required:!0}),"Female"]}),(0,jsx_runtime.jsxs)("label",{children:[(0,jsx_runtime.jsx)("input",{type:"radio",name:"gender",value:"other",checked:"other"===formData.gender,onChange:handleChange,required:!0}),"Other"]})]}),errors.gender&&(0,jsx_runtime.jsx)("span",{className:"error",children:errors.gender})]}),(0,jsx_runtime.jsxs)("div",{className:"form-group",children:[(0,jsx_runtime.jsx)("label",{children:"Hobbies"}),(0,jsx_runtime.jsx)("div",{children:["Reading","Traveling","Cooking","Sports"].map((hobby=>(0,jsx_runtime.jsxs)("label",{children:[(0,jsx_runtime.jsx)("input",{type:"checkbox",value:hobby,checked:formData.hobbies.includes(hobby),onChange:handleChange}),hobby]},hobby)))}),errors.hobbies&&(0,jsx_runtime.jsx)("span",{className:"error",children:errors.hobbies})]}),(0,jsx_runtime.jsxs)("div",{className:"form-buttons",children:[(0,jsx_runtime.jsx)("button",{type:"submit",children:"Submit"}),(0,jsx_runtime.jsx)("button",{type:"button",onClick:onCancel,children:"Cancel"})]})]})},stories_UserForm=UserForm_UserForm;UserForm_UserForm.__docgenInfo={description:"",methods:[],displayName:"UserForm"};const UserForm_stories={title:"Components/Form",component:stories_UserForm,tags:["autodocs"]},DefaultForm=(args=>(0,jsx_runtime.jsx)(stories_UserForm,{...args})).bind({});DefaultForm.args={onSubmit:data=>{alert(JSON.stringify(data,null,2))},onCancel:()=>{alert("Form canceled")}},DefaultForm.parameters={docs:{source:{code:'import React, { useState } from \'react\';\nimport \'./UserForm.css\';\n\nconst UserForm = ({ onSubmit, onCancel }) => {\n  const [formData, setFormData] = useState({\n    username: \'\',\n    password: \'\',\n    age: \'\',\n    dateOfBirth: \'\',\n    gender: \'\',\n    hobbies: [],\n  });\n\n  const [errors, setErrors] = useState({});\n\n  const handleChange = (e) => {\n    const { name, value, type, checked } = e.target;\n    if (type === \'checkbox\') {\n      setFormData((prevData) => ({\n        ...prevData,\n        hobbies: checked\n          ? [...prevData.hobbies, value]\n          : prevData.hobbies.filter((hobby) => hobby !== value),\n      }));\n    } else {\n      setFormData((prevData) => ({ ...prevData, [name]: value }));\n    }\n  };\n\n  const validate = () => {\n    const newErrors = {};\n    if (!formData.username) newErrors.username = \'Username is required\';\n    if (!formData.password) newErrors.password = \'Password is required\';\n    if (!formData.age) newErrors.age = \'Age is required\';\n    if (!formData.dateOfBirth) newErrors.dateOfBirth = \'Date of Birth is required\';\n    if (!formData.gender) newErrors.gender = \'Gender is required\';\n    if (formData.hobbies.length === 0) newErrors.hobbies = \'At least one hobby is required\';\n    return newErrors;\n  };\n\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    const newErrors = validate();\n    if (Object.keys(newErrors).length === 0) {\n      onSubmit(formData);\n      setFormData({\n        username: \'\',\n        password: \'\',\n        age: \'\',\n        dateOfBirth: \'\',\n        gender: \'\',\n        hobbies: [],\n      });\n      setErrors({});\n    } else {\n      setErrors(newErrors);\n    }\n  };\n\n  return (\n    <form className={\'user-form\'} onSubmit={handleSubmit}>\n      <h2>User Form</h2>\n      <div className="form-group">\n        <label htmlFor="username">Username</label>\n        <input\n          type="text"\n          id="username"\n          name="username"\n          value={formData.username}\n          onChange={handleChange}\n          required\n        />\n        {errors.username && <span className="error">{errors.username}</span>}\n      </div>\n\n      <div className="form-group">\n        <label htmlFor="password">Password</label>\n        <input\n          type="password"\n          id="password"\n          name="password"\n          value={formData.password}\n          onChange={handleChange}\n          required\n        />\n        {errors.password && <span className="error">{errors.password}</span>}\n      </div>\n\n      <div className="form-group">\n        <label htmlFor="age">Age</label>\n        <select\n          id="age"\n          name="age"\n          value={formData.age}\n          onChange={handleChange}\n          required\n          class="selectWidth"\n        >\n          <option value="">Select age</option>\n          {[...Array(100).keys()].map((age) => (\n            <option key={age} value={age + 1}>\n              {age + 1}\n            </option>\n          ))}\n        </select>\n        {errors.age && <span className="error">{errors.age}</span>}\n      </div>\n\n      <div className="form-group">\n        <label htmlFor="dateOfBirth">Date of Birth</label>\n        <input\n          type="date"\n          id="dateOfBirth"\n          name="dateOfBirth"\n          value={formData.dateOfBirth}\n          onChange={handleChange}\n          required\n        />\n        {errors.dateOfBirth && <span className="error">{errors.dateOfBirth}</span>}\n      </div>\n\n      <div className="form-group">\n        <label>Gender</label>\n        <div>\n          <label>\n            <input\n              type="radio"\n              name="gender"\n              value="male"\n              checked={formData.gender === \'male\'}\n              onChange={handleChange}\n              required\n            />\n            Male\n          </label>\n          <label>\n            <input\n              type="radio"\n              name="gender"\n              value="female"\n              checked={formData.gender === \'female\'}\n              onChange={handleChange}\n              required\n            />\n            Female\n          </label>\n          <label>\n            <input\n              type="radio"\n              name="gender"\n              value="other"\n              checked={formData.gender === \'other\'}\n              onChange={handleChange}\n              required\n            />\n            Other\n          </label>\n        </div>\n        {errors.gender && <span className="error">{errors.gender}</span>}\n      </div>\n\n      <div className="form-group">\n        <label>Hobbies</label>\n        <div>\n          {[\'Reading\', \'Traveling\', \'Cooking\', \'Sports\'].map((hobby) => (\n            <label key={hobby}>\n              <input\n                type="checkbox"\n                value={hobby}\n                checked={formData.hobbies.includes(hobby)}\n                onChange={handleChange}\n              />\n              {hobby}\n            </label>\n          ))}\n        </div>\n        {errors.hobbies && <span className="error">{errors.hobbies}</span>}\n      </div>\n\n      <div className="form-buttons">\n        <button type="submit">Submit</button>\n        <button type="button" onClick={onCancel}>Cancel</button>\n      </div>\n    </form>\n  );\n};\n\nexport default UserForm;\n'}}};const __namedExportsOrder=["DefaultForm"];DefaultForm.parameters={...DefaultForm.parameters,docs:{...DefaultForm.parameters?.docs,source:{originalSource:"args => <UserForm {...args} />",...DefaultForm.parameters?.docs?.source}}}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
const procedureMapping = new Map();
procedureMapping.set("usp_User_Insert",[
    {propColumn:"FirstName", type: "string", modelProperty:"firstName"},
    {propColumn:"LastName", type: "string",  modelProperty:"lastName"},
    {propColumn:"Email", type: "string", modelProperty:"email"},
    {propColumn:"RoleId", type: "number",  modelProperty:"role.id"},
    {propColumn:"UserTypeId", type: "number",  modelProperty:"userType.id"},
    {propColumn:"Gender", type: "string",  modelProperty:"gender"},
    {propColumn:"LoginId", type: "string",  modelProperty:"loginId"}, 
    {propColumn:"LoginPassword", type: "string",  modelProperty:"loginPassword"}, 
]);

module.exports = procedureMapping;


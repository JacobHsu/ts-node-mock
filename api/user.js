"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserInfo = void 0;
const tslib_1 = require("tslib");
const faker_1 = tslib_1.__importDefault(require("faker"));

const getTransactions = (req, res) => {
    return res.json({
        code: 0,
        result: {
          userId: "3",
          username: "jacob",
          realName: "Hello Jacob",
          avatar: "https://q1.qlogo.cn/g?b=qq&nk=10000&s=640",
          desc: "manager",
          password: "123456",
          token: faker_1.default.datatype.uuid(),
          roles: [
            {
              "roleName": "Super Man",
              "value": "super"
            }
          ]
        },
        message:"ok",
        type:"success"
    });
};
exports.getUserInfo = getTransactions;



const userList = [
  {
      id: 0,
      username: 'admin',
      password: 'any',
      name: 'Super Admin',
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      introduction: 'I am a super administrator',
      email: 'admin@test.com',
      phone: '1234567890',
      roles: ['admin'],
  },
  {
      id: 1,
      username: 'editor',
      password: 'any',
      name: 'Normal Editor',
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      introduction: 'I am an editor',
      email: 'editor@test.com',
      phone: '1234567890',
      roles: ['editor'],
  }
];

exports.login = (req, res) => {
  const { username } = req.body;
  for (const user of userList) {
      if (user.username === username) {
          return res.json({
              code: 20000,
              data: {
                  accessToken: username + '-token'
              }
          });
      }
  }
  return res.status(400).json({
      code: 50004,
      messaege: 'Invalid User'
  });
};
// exports.login = login;

exports.getUsers = (req, res) => {
  const { name } = req.query;
  const users = userList.filter(user => {
      const lowerCaseName = user.name.toLowerCase();
      return !(name && lowerCaseName.indexOf(name.toLowerCase()) < 0);
  });
  return res.json({
      code: 20000,
      data: {
          items: users
      }
  });
};

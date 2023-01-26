"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//exports.getUserInfo = void 0;
const tslib_1 = require("tslib");
const faker_1 = tslib_1.__importDefault(require("faker"));

const getUserLogin = (req, res) => {
    return res.json({
        code: 0,
        result: {
          roles: [
            {
                "roleName": "Super Man",
                "value": "super"
            }
          ],
          userId: "3",
          username: "admin",
          realName: "Jacob",
          token: faker_1.default.datatype.uuid(),
          desc: "manager"
        },
        message:"ok",
        type:"success"
    });
};
exports.getLogin = getUserLogin;

const userList = [
    {
        id: 0,
        username: 'market',
        password: 'any',
        name: 'Super Admin',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        introduction: 'I am a super administrator',
        email: 'admin@test.com',
        phone: '1234567890',
        roles: ['admin'],
    }
  ];
exports.userlogin = (req, res) => {
    const { username } = req.body;
    for (const user of userList) {
        if (user.username === username) {
            return res.json({
                code: 0,
                result: {
                    roles: [
                        {
                            "roleName": "Super Man",
                            "value": "super"
                        }
                    ],
                    userId: "3",
                    username: "admin",
                    realName: "Jacob",
                    token: faker_1.default.datatype.uuid(),
                    desc: "manager"
                },
                message:"ok",
                type:"success"
            });
        }
    }
    return res.status(400).json({
        code: 50004,
        messaege: 'Invalid User'
    });
  };
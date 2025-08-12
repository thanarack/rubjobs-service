import { SIGNIN_PAYLOAD } from "../../../type/signin";
import { JWT, ReqPluginContext } from "../../../type/plugin";

export const AuthService = {
  generateUserToken: async (jwt: JWT, user: SIGNIN_PAYLOAD) => {
    return jwt.sign({ userId: "mockId" });
  },
  generateRefreshToken: async (jwt: JWT) => {
    return jwt.sign({ userId: "mockId" });
  },
  signin: async (req: ReqPluginContext) => {
    const user = req.body as SIGNIN_PAYLOAD;
    const result = await req.db.user.findMany();
    const jwt = await AuthService.generateUserToken(req.jwt, user);
    const refreshToken = await AuthService.generateRefreshToken(req.jwt);
    return {
      token: jwt,
      refreshToken: jwt,
    };
  },
};

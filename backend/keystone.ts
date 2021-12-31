import "dotenv/config";
import { config, createSchema } from "@keystone-next/keystone/schema";
import {
  withItemData,
  statelessSessions,
} from "@keystone-next/keystone/session";
import { createAuth } from "@keystone-next/auth";
import { User } from "./schemas/User";

const databaseUrl = process.env.DATABASE_URL || "";

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 30,
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: "User",
  identityField: "email",
  secretField: "password",
  initFirstItem: {
    fields: ["name", "email", "password"],
  },
});

export default withAuth(
  config({
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL],
        credentials: true,
      },
    },
    db: {
      adapter: "mongoose",
      url: databaseUrl,
    },
    lists: createSchema({
      User,
    }),
    ui: {
      isAccessAllowed: ({ session }) => {
        //console.log(session);
        return !!session?.data;
      },
    },
    session: withItemData(statelessSessions(sessionConfig), {
      User: `id`,
    }),
  })
);

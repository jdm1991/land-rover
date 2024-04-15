import React, { useState } from "react";
import { PrismaClient } from "@prisma/client";
import Layout from "./layout";
import "../app/globals.css";
import withAuth from "./utils/withAuth";
import { BsDoorOpen } from "react-icons/bs";

const prisma = new PrismaClient();

const AdminConsole = () => {
  return (
    <div>
      <h1>Admin Console</h1>
      {/* Add your component code here */}
    </div>
  );
};

export default withAuth(AdminConsole);

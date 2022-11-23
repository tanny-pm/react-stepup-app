import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { Login } from "../components/pages/Login";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";
import { HeaderLayout } from "../components/template/HeaderLayout";

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/home"
        element={
          <HeaderLayout>
            <Home />
          </HeaderLayout>
        }
      >
        <Route path="user_management" element={<UserManagement />} />
        <Route path="setting" element={<Setting />} />
      </Route>
    </Routes>
  );
});

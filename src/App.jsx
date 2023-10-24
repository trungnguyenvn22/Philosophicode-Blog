// import { useState } from "react";

import { Route, Routes } from "react-router-dom";
import "./App.scss";
import LoginForm from "./page/LoginForm";
import SignUpForm from "./page/SignUpForm";
import HomeBanner from "./module/home/HomeBanner";
import PostDetailsPage from "./page/PostDetailsPage";
import HomePage from "./page/HomePage";
import HeaderPage from "./components/layout/HeaderPage";
import DashboardLayout from "./module/dashboard/DashboardLayout";
import { RequireAuth } from "react-auth-kit";
import { AuthProvider } from "./contexts/auth-context";
import NotFoundPage from "./page/NotFoundPage";
import AppProvider from "./contexts/AppProvider";
import Categories from "./module/category/Categories";
import SideBarPart2 from "./module/dashboard/SideBarPart2";
import AddNewCategory from "./module/category/AddNewCategory";
import PostAddNew from "./module/post/PostAddNew";
import UpdatePost from "./module/post/UpdatePost";
import PostPage from "./module/post/PostPage";
import PostDetail from "./module/post/PostDetail";

import {
  getCunrentUserRole,
  isLoggedIn,
  loginUser,
} from "./service/userService";
import PostAll from "./module/post/PostAll";
import PostManage from "./module/post/PostManage";
// import ProfileUser from "./module/proflie/ProfileUser";
import PostCategory from "./module/post/PostCategory";
import { useEffect, useState } from "react";
import UserProfile from "./page/UserProfile";
import Footer from "./components/layout/Footer";
import PostThemeOne from "./module/post/PostHomeTheme/PostThemeOne";
import JavaPostHome from "./module/post/PostHomeTheme/JavaPostHome";
import PostThemeText from "./module/post/PostHomeTheme/PostThemeText";
import PostThemeImgText from "./module/post/PostHomeTheme/PostThemeImgText";
import ReactPostHome from "./module/post/PostHomeTheme/ReactPostHome";
import PhilosophyPostHome from "./module/post/PostHomeTheme/PhilosophyPostHome";
import HomeDetail from "./module/home/HomeDetail";
import PostThemeLarge from "./module/post/PostHomeTheme/PostThemeLarge";
import UserProfileUpdate from "./module/proflie/UserProfileUpdate";
import UserLikePost from "./module/proflie/UserLikePost";
import CommentPost from "./module/comment/CommentPost";

// import { AuthProvider } from "./context/auth-context";

function App() {
  return (
    <>
      {/* <HomeBanner></HomeBanner> */}
      <AppProvider>
        <Routes>
          {/* <Route path="/profile" element={<ProfileUser></ProfileUser>}></Route> */}
          <Route path="/sign-up" element={<SignUpForm></SignUpForm>}></Route>
          <Route path="/login" element={<LoginForm></LoginForm>}></Route>
          <Route
            path="/"
            element={
              <AppProvider>
                <HomePage></HomePage>
              </AppProvider>
            }
          >
            <Route path="/" element={<HomeDetail></HomeDetail>}></Route>
            <Route path="/home/posts" element={<PostAll></PostAll>}>
              <Route
                path="home/posts/detail/:slug"
                element={<PostPage></PostPage>}
              ></Route>
              <Route
                path="/home/posts/:strSearch"
                element={<PostAll></PostAll>}
              ></Route>
            </Route>
            <Route
              path="/home/category/:slug"
              element={<PostCategory></PostCategory>}
            ></Route>
          </Route>
          {/* <Route
            path="/post-detail"
            element={<PostDetail></PostDetail>}
          ></Route> */}
          <Route
            path="/post/detail/:slug"
            element={<PostDetail></PostDetail>}
          ></Route>

          <Route path="/postall" element={<PostAll></PostAll>}></Route>
          <Route
            path="/post-category"
            element={<PostCategory></PostCategory>}
          ></Route>
          <Route path="/footer" element={<Footer></Footer>}></Route>
          <Route
            path="/dashboard"
            element={
              //  <ProtectedRouter loggedIn={loggedIn} role={role}>

              <AppProvider>
                <DashboardLayout></DashboardLayout>
              </AppProvider>
              //  </ProtectedRouter>
            }
          >
            <Route
              path="categories"
              element={<Categories></Categories>}
            ></Route>
            <Route path="add-post" element={<PostAddNew></PostAddNew>}></Route>
            <Route
              path="/dashboard/update-post/post/:id"
              element={<UpdatePost></UpdatePost>}
            ></Route>
            <Route
              path="add-category"
              element={<AddNewCategory></AddNewCategory>}
            ></Route>
            <Route path="posts" element={<PostManage></PostManage>}></Route>
          </Route>

          <Route path="/user" element={<UserProfile></UserProfile>}>
            <Route
              path="/user/profile/:email"
              element={<UserProfileUpdate></UserProfileUpdate>}
            ></Route>
            <Route
              path="/user/post-liked/:email"
              element={<UserLikePost></UserLikePost>}
            ></Route>
          </Route>
          <Route path="/comment" element={<CommentPost></CommentPost>}></Route>
          <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
        </Routes>
      </AppProvider>
    </>
  );
}

export default App;

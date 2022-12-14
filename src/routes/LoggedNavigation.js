import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Profile, Artist, Artists, Album, Albums } from "../pages";
import { LoggedLayout } from "../layouts";

export function LoggedNavigation() {
  return (
    <BrowserRouter>
      <LoggedLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/artists/:id" element={<Artist />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/albums/:id" element={<Album />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </LoggedLayout>
    </BrowserRouter>
  )
}

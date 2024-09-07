"use client"
import React, { useState } from 'react'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

export default function LandingPageWidget() {
  const [isLogin, setIsLogin] = useState(true);
  let children = null;

  if (isLogin) {
    children = <LoginForm setIsLogin={setIsLogin} />;
  }
  else {
    children = <SignUpForm setIsLogin={setIsLogin} />;
  }

  return (
    <div className='w-full h-full flex justify-center items-center bg-yshade'>
      {children}
    </div>
  )
}

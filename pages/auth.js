import { useRouter } from 'next/router';
import { getSession } from 'next-auth/client';
import { useEffect, useState } from 'react';

import AuthForm from '../components/auth/auth-form';
// fwh-未登录都需要认证, 认证后获取session信息.  优先加载session,如果登录态跳转首页,否则认证页面AuthForm
function AuthPage() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    getSession().then((session)=>{
      if(session){
        router.replace("/");
      }else{
        setIsLoading(false);
      }
    });
  
  
  }, [router])

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <AuthForm />;
}

export default AuthPage;

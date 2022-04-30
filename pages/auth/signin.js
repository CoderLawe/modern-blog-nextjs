import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import { useContext, useEffect, useState } from "react";
import { ProviderContext } from "../../components/context/DetailContext";

// Running on the browser
function signin() {
    const [providers, setProviders] = useState(null);


    
    const checkProviders = (
        providers &&
        providers.length
     );



    // useEffect(() => {
    //     (async () => {
    //       const res = await getProviders();
    //       setProviders(res);
    //       console.log("setproviders", providers)
    //     })();
    //   }, []);
 

    return (
      <>
      {/* <Header /> */}

      <div className="flex flex-col items-center justify-center min-h-screen py-2  px-14 text-center">

          {/* <img className="w-80" src="https://links.papareact.com/ocw" alt="insta logo"/> */}

          <p className="font-xs italic">
          </p>
        <div className="mt-40">
            {Object.values(providers).map((provider) => (
                    <div key={provider.name}>

                        <button className="p-3 bg-blue-500 rounded-lg text-white" onClick={() => SignIntoProvider(provider.id,{ callbackUrl:'/'})}>
                            Sign in with {provider.name}
                        </button>


                    </div>
                ))}
        </div>
      </div>


      </>
    )
}


// Server side render
export async function getServerSideProps(){
    const providers = await getProviders();
    // const data  = providers.json()
    // setProviderData(providers)
    console.log("Providers", providers)
    return {
        props:{
            providers
        }
    }

}

export default signin

import { currentUser } from '@clerk/nextjs/server';
import { api } from '../../../../convex/_generated/api';
import { fetchQuery } from 'convex/nextjs';
import { SignIn,SignUp,SignUpButton } from '@clerk/nextjs';

export default async function Header() {
  // const user = await currentUser();

  // if (!user) {
  //   return <div>Not signed in</div>;
  // }

  // const convexUser = await fetchQuery(api.users.getUser, {
  //   userId: user.id,
  // });
  // console.log({convexUser})

  return (
    <>
    <div>Header</div>
    <div><SignIn/></div>
    <div><SignUp/></div>
    <div><SignUpButton/></div>
    </>

  );
}

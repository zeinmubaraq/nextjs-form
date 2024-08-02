import ButtonAuth from '@/components/forms/button-auth';
import FormLink from '@/components/forms/form-link';
import Input from '@/components/forms/input';
import InputLabel from '@/components/forms/input-label';

export default function Login() {
  return (
    <main className="h-screen">
      <section className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <InputLabel name="email" label="Email address" />
              <div className="mt-2">
                <Input type="email" name="email" placeholder="" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <InputLabel name="password" label="Password" />
                <FormLink href="#">Forgot password ?</FormLink>
              </div>
              <div className="mt-2">
                <Input type="password" name="password" placeholder="" />
              </div>
            </div>

            <div>
              <ButtonAuth>Sign in</ButtonAuth>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member? <FormLink href="/register">Register</FormLink>
          </p>
        </div>
      </section>
    </main>
  );
}

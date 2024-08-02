import ButtonAuth from '@/components/forms/button-auth';
import FormLink from '@/components/forms/form-link';
import Input from '@/components/forms/input';
import InputLabel from '@/components/forms/input-label';

export default function Register() {
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
            Register for an account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <InputLabel name="name" label="Name" />
              <div className="mt-2">
                <Input type="name" name="name" placeholder="" />
              </div>
            </div>

            <div>
              <InputLabel name="email" label="Email address" />
              <div className="mt-2">
                <Input type="email" name="email" placeholder="" />
              </div>
            </div>

            <div>
              <InputLabel name="password" label="Password" />
              <div className="mt-2">
                <Input type="password" name="password" placeholder="" />
              </div>
            </div>

            <div>
              <InputLabel name="confirm_password" label="ConfirmPassword" />
              <div className="mt-2">
                <Input type="confirm_password" name="confirm_password" placeholder="" />
              </div>
            </div>

            <div>
              <ButtonAuth>Register</ButtonAuth>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account? <FormLink href="/register">Sign in</FormLink>
          </p>
        </div>
      </section>
    </main>
  );
}

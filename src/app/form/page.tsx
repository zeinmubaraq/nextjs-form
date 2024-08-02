import Button from '@/components/forms/button';
import ButtonSubmit from '@/components/forms/button-submit';
import Input from '@/components/forms/input';
import InputLabel from '@/components/forms/input-label';

export default function Form() {
  return (
    <main>
      <div className="px-5 pt-10 sm:mx-auto sm:w-full sm:max-w-2xl sm:px-0">
        <form>
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Personal Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Use a permanent address where you can receive mail.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <InputLabel name="first-name" label="First name" />
                <div className="mt-2">
                  <Input type="text" name="first-name" placeholder="" />
                </div>
              </div>

              <div className="sm:col-span-3">
                <InputLabel name="last-name" label="Last name" />
                <div className="mt-2">
                  <Input type="text" name="last-name" placeholder="" />
                </div>
              </div>

              <div className="sm:col-span-4">
                <InputLabel name="email" label="Email address" />
                <Input type="email" name="email" placeholder="" />
              </div>

              <div className="sm:col-span-full">
                <InputLabel name="street-address" label="Street address" />
                <Input type="text" name="street-address" placeholder="" />
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <InputLabel name="city" label="City" />
                <Input type="text" name="city" placeholder="" />
              </div>

              <div className="sm:col-span-2">
                <InputLabel name="region" label="State / Province" />
                <Input type="text" name="region" placeholder="" />
              </div>

              <div className="sm:col-span-2">
                <InputLabel name="postal-code" label="ZIP / Postal code" />
                <Input type="text" name="postal-code" placeholder="" />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <Button>Cancel</Button>
              <ButtonSubmit>Save</ButtonSubmit>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

import ButtonAuth from '@/components/forms/button-auth';
import Input from '@/components/forms/input';
import InputLabel from '@/components/forms/input-label';
import TextArea from '@/components/forms/text-area';

export default function ContactUs() {
  const divStyle = {
    clipPath:
      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
  };

  return (
    <main>
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style={divStyle}
          />
        </div>

        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Aute magna irure deserunt veniam aliqua magna enim voluptate.
          </p>
        </div>

        <form className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <InputLabel name="first-name" label="First name" />
              <div className="mt-2.5">
                <Input type="text" name="first-name" placeholder="" />
              </div>
            </div>

            <div>
              <InputLabel name="last-name" label="Last name" />
              <div className="mt-2.5">
                <Input type="text" name="last-name" placeholder="" />
              </div>
            </div>

            <div className="sm:col-span-2">
              <InputLabel name="company" label="Company" />
              <div className="mt-2.5">
                <Input type="text" name="company" placeholder="" />
              </div>
            </div>

            <div className="sm:col-span-2">
              <InputLabel name="email" label="Email" />
              <div className="mt-2.5">
                <Input type="email" name="email" placeholder="" />
              </div>
            </div>

            <div className="sm:col-span-2">
              <InputLabel name="message" label="Message" />
              <div className="mt-2.5">
                <TextArea name="message"></TextArea>
              </div>
            </div>

            <div className="mt-10 sm:col-span-2">
              <ButtonAuth>Let&apos;s talk</ButtonAuth>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

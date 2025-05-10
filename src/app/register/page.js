// frontend/pages/register.js
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { register as registerService } from "@/services/api";

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'loader', address: '' });
  const [registrationError, setRegistrationError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setRegistrationError('');
    try {
      const data = await registerService(formData);
      console.log('Registration successful:', data);
      router.push(`/user/${data.userId}`); // Redirect with userId
    } catch (error) {
      console.error('Registration error:', error);
      setRegistrationError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // KEEP YOUR EXISTING JSX HERE (the return statement with your form and UI elements)
  return (
    <div className="bg-black text-white font-sans min-h-screen flex flex-col">
      <Header />
      <div className="w-full flex flex-col gap-y-8 px-16 py-12">
        <h2 className="text-3xl font-bold">Бүртгүүлэх</h2>
        <div className="flex w-full gap-x-10">
          <div className="w-[35vw] flex flex-col">
            <form className="flex flex-col gap-6 h-full" onSubmit={handleRegister}>
              {registrationError && <p className="text-red-500">{registrationError}</p>}
              <div>
                <label className="block mb-1">Нэр</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-2 py-3 rounded-xl bg-white border border-none focus:outline-purple-800 text-black" required />
              </div>
              <div>
                <label className="block mb-1">Имэйл</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-2 py-3 rounded-xl bg-white border border-none focus:outline-purple-800 text-black" required />
              </div>
              <div>
                <label className="block mb-1">Нууц үг</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full px-2 py-3 rounded-xl bg-white border border-none focus:outline-purple-800 text-black" required />
              </div>
              <div>
                <label className="block mb-1">Үүрэг</label>
                <select name="role" value={formData.role} onChange={handleChange} className="w-full px-2 py-3 rounded-xl bg-white border border-none focus:outline-purple-800 text-black" required>
                  <option value="loader">Зээлдэгч</option>
                  <option value="renter">Зээлэгч</option>
                </select>
              </div>
              <div>
                <label className="block mb-1">Хаяг</label>
                <input type="text" name="address" value={formData.address} onChange={handleChange} className="w-full px-2 py-3 rounded-xl bg-white border border-none focus:outline-purple-800 text-black" required />
              </div>
              <button type="submit" className={`w-full bg-white text-black font-semibold py-2 rounded-full hover:bg-purple-700 cursor-pointer ${loading ? 'opacity-50 cursor-wait' : ''}`} disabled={loading}>
                {loading ? 'Бүртгүүлж байна...' : 'Бүртгүүлэх'}
              </button>
              <p className="text-sm text-gray-400">
                Аль хэдийн бүртгүүлсэн бол{" "}
                <span className="underline ml-1 cursor-pointer" onClick={() => router.push("/login")}>
                  нэвтэрнэ үү
                </span>
              </p>
            </form>
          </div>
          <div className="w-[65vw]">
            <Image
              src="/image/mongolia.png"
              alt="3D Map"
              layout="responsive"
              width={700}
              height={475}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
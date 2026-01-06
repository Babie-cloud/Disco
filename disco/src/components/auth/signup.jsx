import React, { useState } from "react";
import AuthLayout from "./AuthLayout";
import ThemeToggle from "../ThemeToggle"; 
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaTwitter } from "react-icons/fa";

const Signup = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    birthDate: "",
    educationLevel: "",
    year: "",
    period: "",
    profileImage: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profileImage") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 3) {
      handleNext();
    } else {
      console.log("Formulaire envoyé :", formData);
      // Appel API ici
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="step-fields space-y-4">
            <div>
              <label className="block text-sm font-medium">Full Name<span className="text-red-500">*</span></label>
              <input name="fullName" required onChange={handleChange} placeholder="Full Name" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium">Last Name</label>
              <input name="lastName" onChange={handleChange} placeholder="Last Name" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium">Username<span className="text-red-500">*</span></label>
              <input name="username" required onChange={handleChange} placeholder="Username" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium">Email<span className="text-red-500">*</span></label>
              <input name="email" type="email" required onChange={handleChange} placeholder="Email" className="w-full p-2 border rounded" />
            </div>
            <button type="button" onClick={handleNext} className="w-full bg-prune text-white py-2 rounded mt-4">Next</button>
          </div>
        );
      case 2:
        return (
          <div className="step-fields space-y-4">
            <div>
              <label className="block text-sm font-medium">Password<span className="text-red-500">*</span></label>
              <input name="password" type="password" required onChange={handleChange} placeholder="Password" title="Mot de passe" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium">Confirm Password<span className="text-red-500">*</span></label>
              <input name="confirmPassword" type="password" required onChange={handleChange} placeholder="Confirm Password" title="Confirmation" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium">Gender<span className="text-red-500">*</span></label>
              <select name="gender" required onChange={handleChange} className="w-full p-2 border rounded text-gray-500">
                <option value="">Choose Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Birth Date<span className="text-red-500">*</span></label>
              <input name="birthDate" type="date" required onChange={handleChange} className="w-full p-2 border rounded" />
            </div>
            <div className="flex gap-4 mt-4">
              <button type="button" onClick={handleBack} className="w-1/2 bg-gray-200 py-2 rounded">Back</button>
              <button type="button" onClick={handleNext} className="w-1/2 bg-prune text-white py-2 rounded">Next</button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="step-fields space-y-4">
            <div>
              <label className="block text-sm font-medium">Education Level<span className="text-red-500">*</span></label>
              <select name="educationLevel" required onChange={handleChange} className="w-full p-2 border rounded text-gray-500">
                <option value="">Choose level</option>
                <option value="Secondary">Secondary</option>
                <option value="University">University</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Year of study</label>
              <input name="year" placeholder="e.g., 3rd Year" onChange={handleChange} className="w-full p-2 border rounded" />
            </div>
            {formData.educationLevel && (
              <div>
                <label className="block text-sm font-medium">{formData.educationLevel === "Secondary" ? "Trimester" : "Semester"}</label>
                <input name="period" placeholder={formData.educationLevel === "Secondary" ? "Trimester" : "Semester"} onChange={handleChange} className="w-full p-2 border rounded" />
              </div>
            )}
            <div className="flex flex-col items-center gap-2">
              <label className="block text-sm font-medium">Profile Image</label>
              <div className="relative w-24 h-24">
                <img 
                  src={formData.profileImage ? URL.createObjectURL(formData.profileImage) : "/images/image_copy.png"} 
                  alt="Profile" 
                  className="w-full h-full rounded-full object-cover border"
                />
              </div>
              <input type="file" name="profileImage" accept="image/*" onChange={handleChange} className="text-xs" />
            </div>
            <div className="flex gap-4 mt-4">
              <button type="button" onClick={handleBack} className="w-1/2 bg-gray-200 py-2 rounded">Back</button>
              <button type="submit" className="w-1/2 bg-green-600 text-white py-2 rounded">Create Account</button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <AuthLayout title="Inscription">
      <div className="signup-container flex flex-col md:flex-row min-h-screen">
        <div className="signup-left bg-prune text-white p-8 flex flex-col justify-center md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">Let’s Make It Happen Together!</h1>
          <ThemeToggle />
        </div>
        
        <div className="signup-right p-8 md:w-1/2 flex flex-col justify-center bg-white">
          <form className="signup-form max-w-md mx-auto w-full" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold mb-6">Create An Account</h2>
            
            {renderStep()}

            <div className="mt-8">
              <p className="text-center text-gray-500 mb-4">Or sign up with</p>
              <div className="flex justify-center gap-4 social-buttons">
                <button type="button" className="p-2 border rounded flex items-center gap-2 hover:bg-gray-50"><FcGoogle /> Google</button>
                <button type="button" className="p-2 border rounded flex items-center gap-2 hover:bg-gray-50 text-blue-600"><FaFacebook /> Facebook</button>
                <button type="button" className="p-2 border rounded flex items-center gap-2 hover:bg-gray-50 text-blue-400"><FaTwitter /> Twitter</button>
              </div>
            </div>

            <div className="text-center mt-6 text-sm text-gray-600">
              Already have an account?{" "}
              <a href="/login" className="text-prune font-bold hover:underline">Log in.</a>
            </div>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Signup;
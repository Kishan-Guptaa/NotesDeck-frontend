
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";


interface UserType {
  name: string;
  emial: string;
  mobile: string;
  image: string;
  bio: string;
  degree: string;
  branch: string;
  year: string | number | null;
  semester: string | number | null;
}
function Toast({ message, type }: { message: string; type: "success" | "error" }) {
  return (
    <div
      className={`
        fixed top-6 right-6 px-5 py-3 mt-24 rounded-lg shadow-xl text-white dark:text-black 
        bg-black dark:bg-white text-sm font-medium z-[9999] animate-slide-in
      `}
    >
      {message}
    </div>
  );
}

export default function AccountPage() {
  const [saving, setSaving] = useState<boolean>(false);

  const [user, setUser] = useState<UserType>({
    name: "",
    emial: "",
    mobile: "",
    image: "",
    bio: "",
    degree: "",
    branch: "",
    year: "",
    semester: "",
  });

  // toast state
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success" as "success" | "error",
  });
  function showToast(message: string, type: "success" | "error") {
    setToast({ show: true, message, type });
    setTimeout(
      () => setToast({ show: false, message: "", type }),
      3000
    );
  }


  //  FETCH USER DATA 
  useEffect(() => {
    async function loadUser() {
      const res = await fetch("/api/user/me");
      const data = await res.json();
      setUser(data);
    }
    loadUser();
  }, []);

  // Image Upload
  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const form = new FormData();
    form.append("file", file);

    const res = await fetch("/api/user/upload-image", {
      method: "POST",
      body: form,
    });

    const data = await res.json();
    setUser((prev) => ({ ...prev, image: data.url }));
  }

  // SAVE DATA
  async function saveData() {
    setSaving(true);

    const res = await fetch("/api/user/update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    const updated = await res.json();
    setUser(updated);
    setSaving(false);

   showToast("Profile Updated Successfully!", "success");

  }

  return (
    
    <div className="max-w-4xl mx-auto p-6 pt-28 space-y-10">
      {toast.show && <Toast message={toast.message} type={toast.type} />}

      <h1 className="text-5xl font-extrabold text-center mb-2 tracking-tight">
        Your Profile
      </h1>

      <p className="text-center text-gray-600 dark:text-gray-400">
        Manage and update your personal & academic information.
      </p>

      {/* ===================== PROFILE CARD ===================== */}
      <div
        className="
          bg-gray-100 dark:bg-neutral-900
          border border-black dark:border-gray-300
          rounded-md p-6
          shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#A0AEC0]
        "
      >
        <div className="flex items-center gap-6">

          {/* PROFILE PIC */}
          <div className="relative w-28 h-28">
            <Image
              src={user.image || "/default-avatar.png"}
              alt="profile"
              fill
              className="rounded-full object-cover border border-black shadow"
            />
            <label
              className="
                absolute bottom-1 right-1
                bg-black dark:bg-gray-400 
                text-white dark:text-black
                px-2 py-1 rounded-full text-xs cursor-pointer
                border border-black dark:border-white
              "
            >
              <input type="file" className="hidden" onChange={handleImageUpload} />
              ✎
            </label>
          </div>

          {/* NAME + EMAIL */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold">{user.name}</h2>
            <p className="text-gray-600 dark:text-gray-300">{user.emial}</p>
          </div>

          {/* SAVE BUTTON */}
          <Button onClick={saveData}>
            {saving ? "Saving..." : "Update"}
          </Button>
        </div>

        {/* FULL NAME + PHONE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 ">
          <Field
            label="Full Name"
            value={user.name}
            
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />

          <Field
            label="Mobile Number"
            value={user.mobile}
            onChange={(e) => setUser({ ...user, mobile: e.target.value })}
          />
        </div>

        {/* BIO */}
        <div className="mt-3">
          <Textarea
            label="Bio"
            value={user.bio}
            onChange={(e) => setUser({ ...user, bio: e.target.value })}
          />
        </div>
      </div>

      {/* ===================== ACADEMIC CARD ===================== */}
      <div
        className="
          bg-gray-100 dark:bg-neutral-900
          border border-black dark:border-gray-300
          rounded-md p-6
          shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#A0AEC0]
        "
      >
        <h2 className="text-3xl font-bold mb-4">Academic Information</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field
            label="Degree"
            value={user.degree}
            onChange={(e) => setUser({ ...user, degree: e.target.value })}
          />

          <Select
            label="Branch"
            value={user.branch}
            options={["CSE Core", "AIML", "DS", "ECE", "ME", "Civil"]}
            onChange={(e) => setUser({ ...user, branch: e.target.value })}
          />

          <Field
            label="Year"
            value={user.year}
            onChange={(e) => setUser({ ...user, year: e.target.value })}
          />

          <Field
            label="Semester"
            value={user.semester}
            onChange={(e) => setUser({ ...user, semester: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
}

/* -------------------- Custom Button -------------------- */
function Button({ children, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className="
        bg-white dark:bg-black
        text-black dark:text-white
        border border-black dark:border-gray-300
        shadow-[3px_3px_0_0_#000] dark:shadow-[3px_3px_0_0_#A0AEC0]
        px-6 py-2 rounded-md font-semibold text-sm
        hover:translate-x-[2px] hover:translate-y-[2px]
        hover:shadow-none transition-all
      "
    >
      {children}
    </button>
  );
}

/* -------------------- Form Components -------------------- */

interface FieldProps {
  label: string;
  value: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
function Field({ label, value, onChange }: FieldProps) {
  return (
    <div
      className="
        bg-white dark:bg-black
        border border-black dark:border-gray-300
        rounded-md p-3
        shadow-[3px_3px_0_0_#000] dark:shadow-[2px_2px_0_0_#A0AEC0]
      "
    >
      <label className=" block mb-1 font-extrabold">{label}</label>
      <input
        value={value || ""}
        onChange={onChange}
        className="w-full bg-transparent outline-none font-bold"
      />
    </div>
  );
}

interface TextareaProps {
  label: string;
  value: any;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
function Textarea({ label, value, onChange }: TextareaProps) {
  return (
    <div
      className="
        bg-white dark:bg-black
        border border-black dark:border-gray-300
        rounded-md p-3
        shadow-[3px_3px_0_0_#000] dark:shadow-[2px_2px_0_0_#A0AEC0]
      "
    >
      <label className="font-extrabold block mb-1 ">{label}</label>
      <textarea
        value={value || ""}
        rows={4}
        onChange={onChange}
        className="w-full bg-transparent outline-none resize-none"
      ></textarea>
    </div>
  );
}

interface SelectProps {
  label: string;
  value: any;
  options: string[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
function Select({ label, value, options, onChange }: SelectProps) {
  return (
    <div
      className="
        bg-white dark:bg-black
        border border-black dark:border-gray-300
        rounded-md p-3
        shadow-[3px_3px_0_0_#000] dark:shadow-[2px_2px_0_0_#A0AEC0]
      "
    >
      <label className="font-extrabold block mb-1">{label}</label>
      <select
        value={value || ""}
        onChange={onChange}
        className="w-full bg-transparent outline-none font-bold"
      >
        <option value="">Select</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

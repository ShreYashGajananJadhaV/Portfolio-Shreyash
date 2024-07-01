import { useState, React } from "react";
import { IoMdContact } from "react-icons/io";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ContactModal() {
  const dialogDiv = (
    <div className=" fixed z-40 badge badge-info gap-2 -left-20 -top-4 px-1 py-2 text-white bg-gray-800">
      contacts
    </div>
  );
  const [dialog, setDialog] = useState("");
  return (
    <div>
      <div className="z-40 fixed top-32 right-8 text-5xl text-gray-800 transition animate-jump-in">
        <button
          className="animate-wiggle-more animate-infinite"
          onClick={() => document.getElementById("my_modal_3").showModal()}
          onMouseOver={() => {
            setDialog(dialogDiv);
          }}
          onMouseOut={() => {
            setDialog("");
          }}
        >
          <IoMdContact></IoMdContact>
        </button>
        {dialog}
      </div>

      {dialog}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Contact Me ... </h3>
          <div className="flex justify-around  font-mono text-gray-800">
            {/* phone section */}
            <section className="flex ">
              <FaPhoneSquareAlt className="text-xl m-auto"></FaPhoneSquareAlt>
              <p className="m-2">+91-9511794113</p>
            </section>
            {/* email section */}
            <section className="flex">
              <MdEmail className="text-xl m-auto"></MdEmail>

              <p className="m-2">sj2454925@gmail.com</p>
            </section>
          </div>
        </div>
      </dialog>
    </div>
  );
}

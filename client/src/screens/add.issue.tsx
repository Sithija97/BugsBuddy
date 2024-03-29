import { useState } from "react";
import { MdLibraryAddCheck } from "react-icons/md";
import { useAppDispatch } from "../store/store";
import { addIssue, getIssues } from "../store/issues/issueSlice";
import { ResponseStatus } from "../enums";
import { useNavigate } from "react-router-dom";
import { HOME } from "../routes";

type IFormData = {
  title: string;
  description: string;
};

export const AddIssue = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const initialState = {
    title: "",
    description: "",
  };

  const [formData, setFormData] = useState<IFormData>(initialState);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, description } = formData;
    const response = await dispatch(addIssue({ title, description }));

    if (response.meta.requestStatus === ResponseStatus.FULFILLED) {
      navigate(HOME);
      dispatch(getIssues());
    } else {
      alert("Error Occured: Add Issue");
    }
  };

  return (
    <div className="grid xl:grid-cols-4 gap-4 py-10 px-24">
      <div className="xl:col-span-2 bg-white rounded-lg px-5 py-8">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleInputChange}
            className="border border-gray-300 p-0 outline-gray-300 w-full px-2 mb-4 rounded-sm"
          />
          <textarea
            cols={30}
            rows={10}
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleInputChange}
            className="border border-gray-300 p-0 outline-gray-300 w-full px-2 mb-4 rounded-sm"
          />
          <button
            type="submit"
            className="bg-blue-100 text-blue-800 py-1 px-2 rounded-md flex items-center gap-1 justify-center"
          >
            <MdLibraryAddCheck />
            Submit New Issue
          </button>
        </form>
      </div>
    </div>
  );
};

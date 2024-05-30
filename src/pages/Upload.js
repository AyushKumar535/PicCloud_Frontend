import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './Search.css';
import { FaFileUpload } from 'react-icons/fa';
import { CiImport } from 'react-icons/ci';
import { json, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { CiCircleRemove } from "react-icons/ci";

const Upload = () => {
    const navigate = useNavigate();
    const [file, setFile] = useState(null);
    const [fileUrl, setFileUrl] = useState(''); // This is not an url we have to convert it to base 64
    const [loading, setLoading] = useState(false);
    const onDrop = useCallback((acceptedFiles) => {
        const selectedFile = acceptedFiles[0];
        setFile(selectedFile);
        previewImage(selectedFile);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    const previewImage = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = () => {
            setFileUrl(reader.result);
        };
    };
    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            setLoading(true)
            const result = await fetch("https://piccloud-backend.onrender.com/upload/uploadfiles", {
                method: 'POST',
                body: JSON.stringify({
                    fileUrl
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
            })
            if (result.ok) {
                toast.success("File Uploaded Successfully")
                setLoading(false)
                setTimeout(() => {
                    navigate('/main')
                }, 2000)
            }
            else {
                setLoading(false)
                toast.error("Failed to upload ")
            }

        } catch (error) {
            setLoading(false)
            toast.error("Failed to upload ")
        }


    }
    const removeImage = () => {
        setFile(null)
    }
    console.log(loading)
    return (
        <>
            {
                loading ?
                    <div className="flex-col gap-4 w-full flex items-center justify-center h-[60vh]">
                        <div className="w-28 h-28 border-8 text-[#123a2b] text-4xl animate-spin  flex items-center justify-center border-[#4ddfa7] rounded-full">
                            <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" className="animate-ping">
                                <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"></path>
                            </svg>
                        </div>
                    </div> :
                    <div className='flex justify-center items-center h-[500px]'>
                        <Toaster />
                        <form className="file-upload-form ">
                            <label htmlFor="file" className="file-upload-label">
                                {
                                    file ? <div className='flex mx-auto justify-center items-center gap-3'>

                                        <div className='grid gap-2'>
                                            <h1 className='font-bold '>{file.name}</h1>
                                            <div className='flex justify-center items-center gap-2'>
                                                <p>{file.size}KB</p>
                                                <p className='font-semibold'>{file.type}</p>
                                            </div>
                                        </div>
                                        <div onClick={removeImage} className='flex'>
                                            <CiCircleRemove size={40} />
                                        </div>

                                    </div> : <div className="file-upload-design" {...getRootProps()}>
                                        <input {...getInputProps()} type="file" required />
                                        {isDragActive ? (
                                            <div>
                                                <CiImport size={50} />
                                                <p>Drop the files here ...</p>
                                            </div>
                                        ) : (
                                            <div className="grid justify-center items-center gap-4">
                                                <svg className="mx-auto" viewBox="0 0 640 512" height="1em">
                                                    <path
                                                        d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"
                                                    ></path>
                                                </svg>
                                                <p className="font-semibold">Drag & drop some files here, or click to select files</p>
                                            </div>
                                        )}
                                    </div>

                                }


                            </label>
                            <div className='mx-auto mt-4'>
                                <button onClick={handleSubmit} className='bg-[#4ddfa7] p-3 cursor-pointer w-[100px] rounded-full text-white '>Submit</button>
                            </div>
                        </form>

                    </div>
            }
        </>

    );
};

export default Upload;

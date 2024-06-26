
import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({email:'',password:''})
  const [formError, setFormError] = useState('')

  const handleChange = (e: { target: { name: string; value: string } }) => {
      const {name,value} = e.target
      setFormData({
        ...formData,
        [name]:value,
      })
  }
  const handleSubmit  = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if(!formData.email || !formData.password){
      setFormError('Both fields are required')
    }

    setFormError('')
    console.log('Email:' ,formData.email)
    console.log('Password:' ,formData.password)

    
  }
  return (
<div className="flex flex-col md:flex-row min-h-screen">
      {/* Left side - 40% width on medium and larger screens, full width on small screens */}
      <div className="flex flex-col w-full md:w-2/5 bg-red-200 items-center justify-center min-h-[40vh] md:min-h-full mb-12 md:mb-0">
        <p className="text-center text-xl font-bold">Welcome to our Rize!</p>
      </div>

      {/* Right side - 60% width on medium and larger screens, full width on small screens */}
      <div className="flex flex-col w-full md:w-3/5 justify-center items-center border-2">
        <div className="flex flex-col border border-green-600 bg-green-100 justify-start p-8 md:p-16 rounded-2xl w-full max-w-md mx-auto">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="text-md font-semibold">Email</label>
              <input
                name="email"
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="block w-full border border-black rounded-md p-2"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-md font-semibold">Password</label>
              <input
                name="password"
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="block w-full border border-black rounded-md p-2"
              />
            </div>
            {formError && <p className="text-red-600">{formError}</p>}
            <div className="flex w-full items-center justify-center">
              <button type="submit" className="border border-black text-md font-semibold p-4 bg-white rounded-md py-1 px-12">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App

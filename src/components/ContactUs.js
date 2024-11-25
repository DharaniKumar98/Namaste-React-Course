const ContactUs = () => {
    return (
        <div>
            <h1 className="font-bold text-3xl m-2 p-2">Contact Us</h1>
            <form>
                <input type="text" className="p-2 m-2 border border-black" placeholder="name" />
                <input type="text" className="p-2 m-2 border border-black" placeholder="message" />
                <button className=" m-2 p-2 bg-gray-400 border border-black rounded-lg">Submit</button>
            </form>
        </div>
    )
}

export default ContactUs;
function ContactForm({ id }) {
    return (
        <form id={ id } className='custom-col'>
            <div>
                <input name="name" placeholder="Name" />
                <input name="email" placeholder="Email" />
            </div>
            <div>
                <textarea placeholder="Message" cols={ 5 } />
            </div>
            <button className="btn-custom" type="submit">SUBMIT</button>
        </form>
    );
}

export default ContactForm;
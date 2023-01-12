function StaffCard({ src, name }) {
    return (
        <div className="staff-card shadow">
            <div className="staff-card-head">
                <img alt="" src={ src } />
            </div>
            <div className="staff-card-body text-center">
                <p className="text text-secondary fs-3">
                    { name }
                </p>
                <p className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed.
                </p>
            </div>
        </div>
    );
}

export default StaffCard;
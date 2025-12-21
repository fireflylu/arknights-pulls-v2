import './Banners.css';

function Banners() {
    const banners = [
        {
            name: "A",
            characters: "a",
            date: "jan-16-2026"
        },
        {
            name: "B",
            characters: "b",
            date: "dec-11-2025"
        }
    ]; // sql table of banner information

    return(
        <div className='banners-container'>
            <div className='banners-content'>
                {banners.map((banner, index) => (
                    <div key={index} className='banner'>
                        <h2><strong>{banner.name}: {banner.characters}</strong></h2>
                        <p><i>{banner.date}</i></p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Banners;
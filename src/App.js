import './App.css';
import './components/Banners.css';

function App() {
    const banners = [
        {
            name: "A",
            characters: "a",
            date: "jan-16-2026",
            image: "https://arknights.wiki.gg/images/thumb/CN_Hanabi_Exiled_banner.png/1536px-CN_Hanabi_Exiled_banner.png?89db07"
        },
        {
            name: "B",
            characters: "b",
            date: "dec-11-2025",
            image: "https://arknights.wiki.gg/images/EN_The_Rolling_Thunder_banner.png?2859d1"
        }
    ]; // sql table of banner information

    return (
        <div>
            <div class="split-container">
                <div class="split-left">
                    <h1>Hi Right</h1>
                    <p>The banner information goes here, and how many pulls per banner.</p>
                    {banners.map((banner, index) => (
                        <div key={index} className='split-container'>
                            <div class="split-left">
                                <i><img src={banner.image} alt={banner.name}></img></i>
                            </div>
                            <div class="split-right">
                                <h3><strong>{banner.name}: {banner.characters}</strong></h3>
                                <p><i>{banner.date}</i></p>
                                <form>
                                    <label for="pulls"># of Pulls:</label>
                                    <input type='text' id='pulls' name='pulls'></input>
                                </form>
                            </div>
                        </div>
                    ))}
                </div>
                <div class="split-right">
                    <h1>I'm right</h1>
                    <p>This is the right side of the split layout.</p>
                    <p>The pulls calculator goes here.</p>
                </div>
            </div>
        </div>
    );
}

export default App;

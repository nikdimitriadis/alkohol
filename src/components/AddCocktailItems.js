const AddCocktailItems = () => {
    return (  
        <article>
            <h2>Füge deine eigenen Getränke hinzu!</h2>
            <div>
            <form action="">
                <input type="text" name="" id="name" placeholder="Name"/>
                <select name="" id="">
                    <option value="gin">Gin</option>
                    <option value="vodka">Vodka</option>
                    <option value="rum">Rum</option>
                    <option value="sctoch">Scotch</option>
                    <option value="alkoholfrei">Alkoholfrei</option>
                </select>
                <input type="image" src="" alt="" placeholder="Bild URL"/>
                <input type="text" name="" id="description" placeholder="Anleidung"/>
                <input type="text" name="" id="amountIncredient1" placeholder="Menge Zutat 1"/>
                <input type="text" name="" id="incredient2" placeholder="Zutat 2"/>
                <input type="text" name="" id="amountIncredient2" placeholder="Menge Zutat 2"/>
                <input type="text" name="" id="incredient3" placeholder="Zutat 3"/>
                <input type="text" name="" id="amountIncredient3" placeholder="Menge Zutat 3"/>
                <input type="submit" value="Submit" />
            </form>
            <div>
                <img src="" alt="Bild1" />
                <img src="" alt="Bild2" />
                <img src="" alt="Bild3" />
            </div>
            </div>
            
        </article>
    );
}
 
export default AddCocktailItems;
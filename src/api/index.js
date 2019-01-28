//Google API-key - https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyACULpszbWYoo4wwRxSfaZKu3T2GEcsC-Q
import { API_KEY }  from  './config';

class GoogleApi {

    static getAllFontsMock() {
        return new Promise((resolve) => {
            fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=' + API_KEY)
            .then(res => res.json())
            .then(data => resolve(Object.assign([], data)));
        });
    }

    static getAllCategoriesMock() {
            return new Promise((resolve) => {
                fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=' + API_KEY)
                .then(res => res.json())
                .then(data => { 
                    const categories = data.items.map((font) => {
                        return font.category;
                    });
                    var uniqueCategories = [...new Set(categories)];
                    resolve(Object.assign([], uniqueCategories))
                });
            });
    }
}

export default GoogleApi;
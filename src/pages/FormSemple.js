import React, { useState, useEffect } from "react";


function FormSemple() {

    const mystyle = {

        form: {



            'margin': '10px',
            'padding': '10px',

            'border': '1px solid #4CAF50'
        }
    }



    const [repository, setRepository] = useState([])



    function handleAddReposity() {

        var random_id = Math.random();

        setRepository([...repository, { id: random_id, name: 'repo-' + random_id }]);
    }

    async function GetRepos() {

        var response = await fetch("https://api.github.com/users/fausio/repos");
        var data = await response.json();
        setRepository(data);
    }

    useEffect(() => {

        GetRepos();

    }, []);

    function handleFavorite(idRepository) {

        const newFavority = repository.map(x => {


            return x.id === idRepository ? { ...x, favorite: !x.favorite } : x;

        });


        setRepository(newFavority);

    }


    useEffect(() => {

        const filtered = repository.filter(x => x.favorite);

        document.title = filtered.length
    }, [repository])

    return (
        <>
            <div style={mystyle.form}>
                <label>Form works</label>


                <ul>
                    {

                        repository.map(x =>

                            <li key={x.id}>
                                {x.name}
                                {x.favorite && <span>(Favorito)</span>}
                                <button onClick={() => handleFavorite(x.id)}>
                                    ⭐
                                </button>
                            </li>


                        )

                    }
                </ul>


                <button onClick={handleAddReposity}>
                    + repository
                </button>

            </div>


        </>
    );
}

export default FormSemple;

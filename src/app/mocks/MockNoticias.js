const dados = [
    { 
        titulo: "Notícia com um nome grande o suficiente pra garantir que tudo caiba sem quebrar",
        //esse campo talvez nem seja necessário
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis diam nulla, ac venenatis dui dignissim feugiat. Nullam pretium viverra ex, id commodo felis malesuada eu. Donec pretium velit odio, sit amet sollicitudin augue maximus id. Sed eu turpis sed sem lobortis aliquet. Aliquam a diam non felis malesuada iaculis mattis ac eros. Sed ultrices scelerisque suscipit. Cras egestas tincidunt ipsum, nec volutpat turpis imperdiet in. Suspendisse imperdiet sollicitudin leo, iaculis dictum libero ultricies a. Duis tempus leo vel orci ullamcorper, non dictum eros tincidunt. Ut lacinia arcu justo, vitae auctor nisl ornare ac. Vivamus dapibus ullamcorper vehicula. Nam fermentum erat vitae urna tempus sollicitudin.",
        url: "https://www.sensacionalista.com.br/2018/10/31/moro-so-aceita-convite-se-ministerio-passar-a-se-chamar-liga-da-justica/",
        miniatura: `http://placehold.it/${Math.round((Math.random()*1000)+200)}x${Math.round((Math.random()*1000)+200)}`
    },
    { 
        titulo: "Notícia com um nome grande o suficiente pra garantir que tudo caiba sem quebrar",
        //esse campo talvez nem seja necessário
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis diam nulla, ac venenatis dui dignissim feugiat. Nullam pretium viverra ex, id commodo felis malesuada eu. Donec pretium velit odio, sit amet sollicitudin augue maximus id. Sed eu turpis sed sem lobortis aliquet. Aliquam a diam non felis malesuada iaculis mattis ac eros. Sed ultrices scelerisque suscipit. Cras egestas tincidunt ipsum, nec volutpat turpis imperdiet in. Suspendisse imperdiet sollicitudin leo, iaculis dictum libero ultricies a. Duis tempus leo vel orci ullamcorper, non dictum eros tincidunt. Ut lacinia arcu justo, vitae auctor nisl ornare ac. Vivamus dapibus ullamcorper vehicula. Nam fermentum erat vitae urna tempus sollicitudin.",
        url: "https://www.sensacionalista.com.br/2018/10/31/moro-so-aceita-convite-se-ministerio-passar-a-se-chamar-liga-da-justica/",
        miniatura: `http://placehold.it/${Math.round((Math.random()*1000)+200)}x${Math.round((Math.random()*1000)+200)}`
    },
    { 
        titulo: "Notícia com um nome grande o suficiente pra garantir que tudo caiba sem quebrar",
        //esse campo talvez nem seja necessário
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis diam nulla, ac venenatis dui dignissim feugiat. Nullam pretium viverra ex, id commodo felis malesuada eu. Donec pretium velit odio, sit amet sollicitudin augue maximus id. Sed eu turpis sed sem lobortis aliquet. Aliquam a diam non felis malesuada iaculis mattis ac eros. Sed ultrices scelerisque suscipit. Cras egestas tincidunt ipsum, nec volutpat turpis imperdiet in. Suspendisse imperdiet sollicitudin leo, iaculis dictum libero ultricies a. Duis tempus leo vel orci ullamcorper, non dictum eros tincidunt. Ut lacinia arcu justo, vitae auctor nisl ornare ac. Vivamus dapibus ullamcorper vehicula. Nam fermentum erat vitae urna tempus sollicitudin.",
        url: "https://www.sensacionalista.com.br/2018/10/31/moro-so-aceita-convite-se-ministerio-passar-a-se-chamar-liga-da-justica/",
        miniatura: `http://placehold.it/${Math.round((Math.random()*1000)+200)}x${Math.round((Math.random()*1000)+200)}`
    },
    { 
        titulo: "Notícia com um nome grande o suficiente pra garantir que tudo caiba sem quebrar",
        //esse campo talvez nem seja necessário
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis diam nulla, ac venenatis dui dignissim feugiat. Nullam pretium viverra ex, id commodo felis malesuada eu. Donec pretium velit odio, sit amet sollicitudin augue maximus id. Sed eu turpis sed sem lobortis aliquet. Aliquam a diam non felis malesuada iaculis mattis ac eros. Sed ultrices scelerisque suscipit. Cras egestas tincidunt ipsum, nec volutpat turpis imperdiet in. Suspendisse imperdiet sollicitudin leo, iaculis dictum libero ultricies a. Duis tempus leo vel orci ullamcorper, non dictum eros tincidunt. Ut lacinia arcu justo, vitae auctor nisl ornare ac. Vivamus dapibus ullamcorper vehicula. Nam fermentum erat vitae urna tempus sollicitudin.",
        url: "https://www.sensacionalista.com.br/2018/10/31/moro-so-aceita-convite-se-ministerio-passar-a-se-chamar-liga-da-justica/",
        miniatura: `http://placehold.it/${Math.round((Math.random()*1000)+200)}x${Math.round((Math.random()*1000)+200)}`
    },
    { 
        titulo: "Notícia com um nome grande o suficiente pra garantir que tudo caiba sem quebrar",
        //esse campo talvez nem seja necessário
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis diam nulla, ac venenatis dui dignissim feugiat. Nullam pretium viverra ex, id commodo felis malesuada eu. Donec pretium velit odio, sit amet sollicitudin augue maximus id. Sed eu turpis sed sem lobortis aliquet. Aliquam a diam non felis malesuada iaculis mattis ac eros. Sed ultrices scelerisque suscipit. Cras egestas tincidunt ipsum, nec volutpat turpis imperdiet in. Suspendisse imperdiet sollicitudin leo, iaculis dictum libero ultricies a. Duis tempus leo vel orci ullamcorper, non dictum eros tincidunt. Ut lacinia arcu justo, vitae auctor nisl ornare ac. Vivamus dapibus ullamcorper vehicula. Nam fermentum erat vitae urna tempus sollicitudin.",
        url: "https://www.sensacionalista.com.br/2018/10/31/moro-so-aceita-convite-se-ministerio-passar-a-se-chamar-liga-da-justica/",
        miniatura: `http://placehold.it/${Math.round((Math.random()*1000)+200)}x${Math.round((Math.random()*1000)+200)}`
    },
    { 
        titulo: "Notícia com um nome grande o suficiente pra garantir que tudo caiba sem quebrar",
        //esse campo talvez nem seja necessário
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis diam nulla, ac venenatis dui dignissim feugiat. Nullam pretium viverra ex, id commodo felis malesuada eu. Donec pretium velit odio, sit amet sollicitudin augue maximus id. Sed eu turpis sed sem lobortis aliquet. Aliquam a diam non felis malesuada iaculis mattis ac eros. Sed ultrices scelerisque suscipit. Cras egestas tincidunt ipsum, nec volutpat turpis imperdiet in. Suspendisse imperdiet sollicitudin leo, iaculis dictum libero ultricies a. Duis tempus leo vel orci ullamcorper, non dictum eros tincidunt. Ut lacinia arcu justo, vitae auctor nisl ornare ac. Vivamus dapibus ullamcorper vehicula. Nam fermentum erat vitae urna tempus sollicitudin.",
        url: "https://www.sensacionalista.com.br/2018/10/31/moro-so-aceita-convite-se-ministerio-passar-a-se-chamar-liga-da-justica/",
        miniatura: `http://placehold.it/${Math.round((Math.random()*1000)+200)}x${Math.round((Math.random()*1000)+200)}`
    },
    { 
        titulo: "Notícia com um nome grande o suficiente pra garantir que tudo caiba sem quebrar",
        //esse campo talvez nem seja necessário
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis diam nulla, ac venenatis dui dignissim feugiat. Nullam pretium viverra ex, id commodo felis malesuada eu. Donec pretium velit odio, sit amet sollicitudin augue maximus id. Sed eu turpis sed sem lobortis aliquet. Aliquam a diam non felis malesuada iaculis mattis ac eros. Sed ultrices scelerisque suscipit. Cras egestas tincidunt ipsum, nec volutpat turpis imperdiet in. Suspendisse imperdiet sollicitudin leo, iaculis dictum libero ultricies a. Duis tempus leo vel orci ullamcorper, non dictum eros tincidunt. Ut lacinia arcu justo, vitae auctor nisl ornare ac. Vivamus dapibus ullamcorper vehicula. Nam fermentum erat vitae urna tempus sollicitudin.",
        url: "https://www.sensacionalista.com.br/2018/10/31/moro-so-aceita-convite-se-ministerio-passar-a-se-chamar-liga-da-justica/",
        miniatura: `http://placehold.it/${Math.round((Math.random()*1000)+200)}x${Math.round((Math.random()*1000)+200)}`
    },
    { 
        titulo: "Notícia com um nome grande o suficiente pra garantir que tudo caiba sem quebrar",
        //esse campo talvez nem seja necessário
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis diam nulla, ac venenatis dui dignissim feugiat. Nullam pretium viverra ex, id commodo felis malesuada eu. Donec pretium velit odio, sit amet sollicitudin augue maximus id. Sed eu turpis sed sem lobortis aliquet. Aliquam a diam non felis malesuada iaculis mattis ac eros. Sed ultrices scelerisque suscipit. Cras egestas tincidunt ipsum, nec volutpat turpis imperdiet in. Suspendisse imperdiet sollicitudin leo, iaculis dictum libero ultricies a. Duis tempus leo vel orci ullamcorper, non dictum eros tincidunt. Ut lacinia arcu justo, vitae auctor nisl ornare ac. Vivamus dapibus ullamcorper vehicula. Nam fermentum erat vitae urna tempus sollicitudin.",
        url: "https://www.sensacionalista.com.br/2018/10/31/moro-so-aceita-convite-se-ministerio-passar-a-se-chamar-liga-da-justica/",
        miniatura: `http://placehold.it/${Math.round((Math.random()*1000)+200)}x${Math.round((Math.random()*1000)+200)}`
    },
    { 
        titulo: "Notícia com um nome grande o suficiente pra garantir que tudo caiba sem quebrar",
        //esse campo talvez nem seja necessário
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis diam nulla, ac venenatis dui dignissim feugiat. Nullam pretium viverra ex, id commodo felis malesuada eu. Donec pretium velit odio, sit amet sollicitudin augue maximus id. Sed eu turpis sed sem lobortis aliquet. Aliquam a diam non felis malesuada iaculis mattis ac eros. Sed ultrices scelerisque suscipit. Cras egestas tincidunt ipsum, nec volutpat turpis imperdiet in. Suspendisse imperdiet sollicitudin leo, iaculis dictum libero ultricies a. Duis tempus leo vel orci ullamcorper, non dictum eros tincidunt. Ut lacinia arcu justo, vitae auctor nisl ornare ac. Vivamus dapibus ullamcorper vehicula. Nam fermentum erat vitae urna tempus sollicitudin.",
        url: "https://www.sensacionalista.com.br/2018/10/31/moro-so-aceita-convite-se-ministerio-passar-a-se-chamar-liga-da-justica/",
        miniatura: `http://placehold.it/${Math.round((Math.random()*1000)+200)}x${Math.round((Math.random()*1000)+200)}`
    },
    { 
        titulo: "Notícia com um nome grande o suficiente pra garantir que tudo caiba sem quebrar",
        //esse campo talvez nem seja necessário
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis diam nulla, ac venenatis dui dignissim feugiat. Nullam pretium viverra ex, id commodo felis malesuada eu. Donec pretium velit odio, sit amet sollicitudin augue maximus id. Sed eu turpis sed sem lobortis aliquet. Aliquam a diam non felis malesuada iaculis mattis ac eros. Sed ultrices scelerisque suscipit. Cras egestas tincidunt ipsum, nec volutpat turpis imperdiet in. Suspendisse imperdiet sollicitudin leo, iaculis dictum libero ultricies a. Duis tempus leo vel orci ullamcorper, non dictum eros tincidunt. Ut lacinia arcu justo, vitae auctor nisl ornare ac. Vivamus dapibus ullamcorper vehicula. Nam fermentum erat vitae urna tempus sollicitudin.",
        url: "https://www.sensacionalista.com.br/2018/10/31/moro-so-aceita-convite-se-ministerio-passar-a-se-chamar-liga-da-justica/",
        miniatura: `http://placehold.it/${Math.round((Math.random()*1000)+200)}x${Math.round((Math.random()*1000)+200)}`
    },
    { 
        titulo: "Notícia com um nome grande o suficiente pra garantir que tudo caiba sem quebrar",
        //esse campo talvez nem seja necessário
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis diam nulla, ac venenatis dui dignissim feugiat. Nullam pretium viverra ex, id commodo felis malesuada eu. Donec pretium velit odio, sit amet sollicitudin augue maximus id. Sed eu turpis sed sem lobortis aliquet. Aliquam a diam non felis malesuada iaculis mattis ac eros. Sed ultrices scelerisque suscipit. Cras egestas tincidunt ipsum, nec volutpat turpis imperdiet in. Suspendisse imperdiet sollicitudin leo, iaculis dictum libero ultricies a. Duis tempus leo vel orci ullamcorper, non dictum eros tincidunt. Ut lacinia arcu justo, vitae auctor nisl ornare ac. Vivamus dapibus ullamcorper vehicula. Nam fermentum erat vitae urna tempus sollicitudin.",
        url: "https://www.sensacionalista.com.br/2018/10/31/moro-so-aceita-convite-se-ministerio-passar-a-se-chamar-liga-da-justica/",
        miniatura: `http://placehold.it/${Math.round((Math.random()*1000)+200)}x${Math.round((Math.random()*1000)+200)}`
    },
    { 
        titulo: "Notícia com um nome grande o suficiente pra garantir que tudo caiba sem quebrar",
        //esse campo talvez nem seja necessário
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis diam nulla, ac venenatis dui dignissim feugiat. Nullam pretium viverra ex, id commodo felis malesuada eu. Donec pretium velit odio, sit amet sollicitudin augue maximus id. Sed eu turpis sed sem lobortis aliquet. Aliquam a diam non felis malesuada iaculis mattis ac eros. Sed ultrices scelerisque suscipit. Cras egestas tincidunt ipsum, nec volutpat turpis imperdiet in. Suspendisse imperdiet sollicitudin leo, iaculis dictum libero ultricies a. Duis tempus leo vel orci ullamcorper, non dictum eros tincidunt. Ut lacinia arcu justo, vitae auctor nisl ornare ac. Vivamus dapibus ullamcorper vehicula. Nam fermentum erat vitae urna tempus sollicitudin.",
        url: "https://www.sensacionalista.com.br/2018/10/31/moro-so-aceita-convite-se-ministerio-passar-a-se-chamar-liga-da-justica/",
        miniatura: `http://placehold.it/${Math.round((Math.random()*1000)+200)}x${Math.round((Math.random()*1000)+200)}`
    },
    { 
        titulo: "Notícia com um nome grande o suficiente pra garantir que tudo caiba sem quebrar",
        //esse campo talvez nem seja necessário
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis diam nulla, ac venenatis dui dignissim feugiat. Nullam pretium viverra ex, id commodo felis malesuada eu. Donec pretium velit odio, sit amet sollicitudin augue maximus id. Sed eu turpis sed sem lobortis aliquet. Aliquam a diam non felis malesuada iaculis mattis ac eros. Sed ultrices scelerisque suscipit. Cras egestas tincidunt ipsum, nec volutpat turpis imperdiet in. Suspendisse imperdiet sollicitudin leo, iaculis dictum libero ultricies a. Duis tempus leo vel orci ullamcorper, non dictum eros tincidunt. Ut lacinia arcu justo, vitae auctor nisl ornare ac. Vivamus dapibus ullamcorper vehicula. Nam fermentum erat vitae urna tempus sollicitudin.",
        url: "https://www.sensacionalista.com.br/2018/10/31/moro-so-aceita-convite-se-ministerio-passar-a-se-chamar-liga-da-justica/",
        miniatura: `http://placehold.it/${Math.round((Math.random()*1000)+200)}x${Math.round((Math.random()*1000)+200)}`
    },
    { 
        titulo: "Notícia com um nome grande o suficiente pra garantir que tudo caiba sem quebrar",
        //esse campo talvez nem seja necessário
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis diam nulla, ac venenatis dui dignissim feugiat. Nullam pretium viverra ex, id commodo felis malesuada eu. Donec pretium velit odio, sit amet sollicitudin augue maximus id. Sed eu turpis sed sem lobortis aliquet. Aliquam a diam non felis malesuada iaculis mattis ac eros. Sed ultrices scelerisque suscipit. Cras egestas tincidunt ipsum, nec volutpat turpis imperdiet in. Suspendisse imperdiet sollicitudin leo, iaculis dictum libero ultricies a. Duis tempus leo vel orci ullamcorper, non dictum eros tincidunt. Ut lacinia arcu justo, vitae auctor nisl ornare ac. Vivamus dapibus ullamcorper vehicula. Nam fermentum erat vitae urna tempus sollicitudin.",
        url: "https://www.sensacionalista.com.br/2018/10/31/moro-so-aceita-convite-se-ministerio-passar-a-se-chamar-liga-da-justica/",
        miniatura: `http://placehold.it/${Math.round((Math.random()*1000)+200)}x${Math.round((Math.random()*1000)+200)}`
    },
    { 
        titulo: "Notícia com um nome grande o suficiente pra garantir que tudo caiba sem quebrar",
        //esse campo talvez nem seja necessário
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis diam nulla, ac venenatis dui dignissim feugiat. Nullam pretium viverra ex, id commodo felis malesuada eu. Donec pretium velit odio, sit amet sollicitudin augue maximus id. Sed eu turpis sed sem lobortis aliquet. Aliquam a diam non felis malesuada iaculis mattis ac eros. Sed ultrices scelerisque suscipit. Cras egestas tincidunt ipsum, nec volutpat turpis imperdiet in. Suspendisse imperdiet sollicitudin leo, iaculis dictum libero ultricies a. Duis tempus leo vel orci ullamcorper, non dictum eros tincidunt. Ut lacinia arcu justo, vitae auctor nisl ornare ac. Vivamus dapibus ullamcorper vehicula. Nam fermentum erat vitae urna tempus sollicitudin.",
        url: "https://www.sensacionalista.com.br/2018/10/31/moro-so-aceita-convite-se-ministerio-passar-a-se-chamar-liga-da-justica/",
        miniatura: `http://placehold.it/${Math.round((Math.random()*1000)+200)}x${Math.round((Math.random()*1000)+200)}`
    },
    { 
        titulo: "Notícia com um nome grande o suficiente pra garantir que tudo caiba sem quebrar",
        //esse campo talvez nem seja necessário
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis diam nulla, ac venenatis dui dignissim feugiat. Nullam pretium viverra ex, id commodo felis malesuada eu. Donec pretium velit odio, sit amet sollicitudin augue maximus id. Sed eu turpis sed sem lobortis aliquet. Aliquam a diam non felis malesuada iaculis mattis ac eros. Sed ultrices scelerisque suscipit. Cras egestas tincidunt ipsum, nec volutpat turpis imperdiet in. Suspendisse imperdiet sollicitudin leo, iaculis dictum libero ultricies a. Duis tempus leo vel orci ullamcorper, non dictum eros tincidunt. Ut lacinia arcu justo, vitae auctor nisl ornare ac. Vivamus dapibus ullamcorper vehicula. Nam fermentum erat vitae urna tempus sollicitudin.",
        url: "https://www.sensacionalista.com.br/2018/10/31/moro-so-aceita-convite-se-ministerio-passar-a-se-chamar-liga-da-justica/",
        miniatura: `http://placehold.it/${Math.round((Math.random()*1000)+200)}x${Math.round((Math.random()*1000)+200)}`
    },
    { 
        titulo: "Notícia com um nome grande o suficiente pra garantir que tudo caiba sem quebrar",
        //esse campo talvez nem seja necessário
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis diam nulla, ac venenatis dui dignissim feugiat. Nullam pretium viverra ex, id commodo felis malesuada eu. Donec pretium velit odio, sit amet sollicitudin augue maximus id. Sed eu turpis sed sem lobortis aliquet. Aliquam a diam non felis malesuada iaculis mattis ac eros. Sed ultrices scelerisque suscipit. Cras egestas tincidunt ipsum, nec volutpat turpis imperdiet in. Suspendisse imperdiet sollicitudin leo, iaculis dictum libero ultricies a. Duis tempus leo vel orci ullamcorper, non dictum eros tincidunt. Ut lacinia arcu justo, vitae auctor nisl ornare ac. Vivamus dapibus ullamcorper vehicula. Nam fermentum erat vitae urna tempus sollicitudin.",
        url: "https://www.sensacionalista.com.br/2018/10/31/moro-so-aceita-convite-se-ministerio-passar-a-se-chamar-liga-da-justica/",
        miniatura: `http://placehold.it/${Math.round((Math.random()*1000)+200)}x${Math.round((Math.random()*1000)+200)}`
    },
    { 
        titulo: "Notícia com um nome grande o suficiente pra garantir que tudo caiba sem quebrar",
        //esse campo talvez nem seja necessário
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis diam nulla, ac venenatis dui dignissim feugiat. Nullam pretium viverra ex, id commodo felis malesuada eu. Donec pretium velit odio, sit amet sollicitudin augue maximus id. Sed eu turpis sed sem lobortis aliquet. Aliquam a diam non felis malesuada iaculis mattis ac eros. Sed ultrices scelerisque suscipit. Cras egestas tincidunt ipsum, nec volutpat turpis imperdiet in. Suspendisse imperdiet sollicitudin leo, iaculis dictum libero ultricies a. Duis tempus leo vel orci ullamcorper, non dictum eros tincidunt. Ut lacinia arcu justo, vitae auctor nisl ornare ac. Vivamus dapibus ullamcorper vehicula. Nam fermentum erat vitae urna tempus sollicitudin.",
        url: "https://www.sensacionalista.com.br/2018/10/31/moro-so-aceita-convite-se-ministerio-passar-a-se-chamar-liga-da-justica/",
        miniatura: `http://placehold.it/${Math.round((Math.random()*1000)+200)}x${Math.round((Math.random()*1000)+200)}`
    },
    { 
        titulo: "Notícia com um nome grande o suficiente pra garantir que tudo caiba sem quebrar",
        //esse campo talvez nem seja necessário
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis diam nulla, ac venenatis dui dignissim feugiat. Nullam pretium viverra ex, id commodo felis malesuada eu. Donec pretium velit odio, sit amet sollicitudin augue maximus id. Sed eu turpis sed sem lobortis aliquet. Aliquam a diam non felis malesuada iaculis mattis ac eros. Sed ultrices scelerisque suscipit. Cras egestas tincidunt ipsum, nec volutpat turpis imperdiet in. Suspendisse imperdiet sollicitudin leo, iaculis dictum libero ultricies a. Duis tempus leo vel orci ullamcorper, non dictum eros tincidunt. Ut lacinia arcu justo, vitae auctor nisl ornare ac. Vivamus dapibus ullamcorper vehicula. Nam fermentum erat vitae urna tempus sollicitudin.",
        url: "https://www.sensacionalista.com.br/2018/10/31/moro-so-aceita-convite-se-ministerio-passar-a-se-chamar-liga-da-justica/",
        miniatura: `http://placehold.it/${Math.round((Math.random()*1000)+200)}x${Math.round((Math.random()*1000)+200)}`
    },
    { 
        titulo: "Notícia com um nome grande o suficiente pra garantir que tudo caiba sem quebrar",
        //esse campo talvez nem seja necessário
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis diam nulla, ac venenatis dui dignissim feugiat. Nullam pretium viverra ex, id commodo felis malesuada eu. Donec pretium velit odio, sit amet sollicitudin augue maximus id. Sed eu turpis sed sem lobortis aliquet. Aliquam a diam non felis malesuada iaculis mattis ac eros. Sed ultrices scelerisque suscipit. Cras egestas tincidunt ipsum, nec volutpat turpis imperdiet in. Suspendisse imperdiet sollicitudin leo, iaculis dictum libero ultricies a. Duis tempus leo vel orci ullamcorper, non dictum eros tincidunt. Ut lacinia arcu justo, vitae auctor nisl ornare ac. Vivamus dapibus ullamcorper vehicula. Nam fermentum erat vitae urna tempus sollicitudin.",
        url: "https://www.sensacionalista.com.br/2018/10/31/moro-so-aceita-convite-se-ministerio-passar-a-se-chamar-liga-da-justica/",
        miniatura: `http://placehold.it/${Math.round((Math.random()*1000)+200)}x${Math.round((Math.random()*1000)+200)}`
    },
    { 
        titulo: "Notícia com um nome grande o suficiente pra garantir que tudo caiba sem quebrar",
        //esse campo talvez nem seja necessário
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis diam nulla, ac venenatis dui dignissim feugiat. Nullam pretium viverra ex, id commodo felis malesuada eu. Donec pretium velit odio, sit amet sollicitudin augue maximus id. Sed eu turpis sed sem lobortis aliquet. Aliquam a diam non felis malesuada iaculis mattis ac eros. Sed ultrices scelerisque suscipit. Cras egestas tincidunt ipsum, nec volutpat turpis imperdiet in. Suspendisse imperdiet sollicitudin leo, iaculis dictum libero ultricies a. Duis tempus leo vel orci ullamcorper, non dictum eros tincidunt. Ut lacinia arcu justo, vitae auctor nisl ornare ac. Vivamus dapibus ullamcorper vehicula. Nam fermentum erat vitae urna tempus sollicitudin.",
        url: "https://www.sensacionalista.com.br/2018/10/31/moro-so-aceita-convite-se-ministerio-passar-a-se-chamar-liga-da-justica/",
        miniatura: `http://placehold.it/${Math.round((Math.random()*1000)+200)}x${Math.round((Math.random()*1000)+200)}`
    },
]
export default dados;
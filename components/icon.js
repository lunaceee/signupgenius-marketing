import React from 'react'

const getIcon = (name, color) => {
  switch (name) {
    case 'Logo':
      return (
        <>
          <path data-name="Path 3" d="M49.814 20.795a12.892 12.892 0 01.529 5.939c-.032.16-.07.318-.108.476a11.53 11.53 0 00-.068.215c-.065.188-.135.375-.209.559l-.069.183c-.017.046-.037.07-.06.117-.181.355-.39.695-.6 1.032l-.022.034c-.178.246-.369.483-.56.719-1.953 2.416-5.32 4.631-8.265 6.559C34.16 40.7 25.907 45.917 26.643 54.51a2.506 2.506 0 00.166.724 43.2 43.2 0 00-10.944-1.941 15.553 15.553 0 00-7.669 1.286c-2.464 1.207-4.024 3.866-4.774 6.4-.015.052-.018.1-.032.151a8.286 8.286 0 00-2.417 2.805c-1.471 2.756-1.329 4.789.888 7.044a16.1 16.1 0 006.613 3.68c4.753 1.556 11.121 2.257 15.48-.711a5.134 5.134 0 001.678-2.442c.114-.314.417-1.657-.38-1.114-2.931 2-6.888 1.977-10.27 1.521a21.72 21.72 0 01-9.643-3.541 12.461 12.461 0 01-2-1.864 5.193 5.193 0 01-.826-1.327l-.128-.373q-.191-.811-.009-.3a5.717 5.717 0 011.026-.639c1.019 3.23 5.658 4.774 8.779 5.441a32.041 32.041 0 008.161.651c2.146-.1 4.88-.428 6.323-2.235 1.417-1.774 2.434-3.861.277-5.365-2.133-1.488-5.052-2.022-7.535-2.514-4.03-.8-9.6-1.566-13.8.077a3.267 3.267 0 01.131-1.013 5.86 5.86 0 01.128-.121 5.071 5.071 0 011.036-.654 9.565 9.565 0 012.825-.846 23.853 23.853 0 017.043.014 39.343 39.343 0 0112.288 3.414c.909.445 2.943-3.356 2.159-3.74a31.44 31.44 0 00-2.343-1.013c.052-.025.1-.048.156-.077a4.668 4.668 0 002.294-3.973c-.024-.28-.039-.556-.045-.837 0-.029.03-.462.027-.529.03-.2.068-.4.109-.592l.008-.036c.016-.04.037-.1.067-.184s.14-.331.185-.441c.076-.138.155-.275.235-.411.035-.06.06-.1.08-.139l.024-.033c.215-.3.451-.575.689-.853a32.565 32.565 0 015.259-4.228c4.739-3.185 9.892-6.091 13.456-10.669a17.128 17.128 0 003.339-13.951 27.356 27.356 0 00-4.943 1.783zM9.071 62.871a35.926 35.926 0 0113.525 2.148 12.536 12.536 0 011.918.876c-.141.025-.278.069-.419.092a26.937 26.937 0 01-8.067-.114c-1.863-.27-6.081-1.14-8.553-2.935a44.29 44.29 0 011.591-.068zm49.644-49.76c-.338 1.8-1.767 4.228-3.733 4.62-6.731 1.343-12.223 5.332-17.286 9.774a83.341 83.341 0 00-7.609 7.1c-2.113 2.384-3.659 5.25-6.081 7.353-1.683 1.462-3.729 1.119-3.934-1.269-.445-5.176-2.139-10.677-5.454-14.746-2.1-2.574 2.864-9.495 5.321-6.48a29.147 29.147 0 015.528 12.465 46.95 46.95 0 013.45-3.875c2.659-2.712 5.537-5.231 8.435-7.683a61.74 61.74 0 018.561-6.191 25.546 25.546 0 00-12.87-7.448c-7.491-1.773-15.557-.387-21.273 5.035a15.9 15.9 0 00-4.791 8.226c-.7 3.481.365 6.769 1.741 9.961 2.792 6.475 7.489 13.349 4.718 20.635-.457 1.2-1.675 2.917-3.172 2.776-1.516-.143-1.315-2.176-.941-3.16.785-2.061-.016-4.764-.843-6.913C7.401 40.484 6 37.819 4.77 35.077a28.769 28.769 0 01-2.64-8.581 19.285 19.285 0 011.413-9.121C8.427 5.153 21.859-2.379 34.816.687c6.453 1.528 13.055 5.09 16.841 10.72a30.287 30.287 0 014.778-1.387c1.956-.395 2.579 1.475 2.279 3.09zm11.049 19.221c0 4.146 17.81 1.974 17.81 11.649 0 8.254-8.57 12.953-15.954 12.953-6.674 0-10.505-4.541-12.242-10.583l8.293-.751c1.343 1.817 3.949 3.989 6.318 3.989 1.777 0 3.673-1.224 3.673-3.159 0-4.857-16.862.237-16.862-10.583 0-8.412 6.476-13.072 14.453-13.072 4.3 0 11.847 3.357 12.4 8.175-2.883 1.263-5.963 2.093-8.964 3.08-1.027-1.777-3.436-4.936-5.687-4.936a3.943 3.943 0 00-3.243 3.237zm21.994 2.685l.2 21.325 8.214-.592-.158-20.812zm-.039-10.465a19.249 19.249 0 00-.079 2.133v1.461c0 1.027 0 2.054.079 3.041l8.806-.593-.355-6.634zm33.724 7.227a3.435 3.435 0 01.039.632c0 1.7-3.751 3.356-5.133 3.83 1.343.632 1.974 2.567 1.974 3.949 0 5.529-7.305 6.6-11.491 6.6l.039.119a4 4 0 00-1.342.908l.079.119c1.816-.119 3.593-.237 5.41-.237 4.422 0 9.28.553 9.28 6.16 0 6.753-7.148 7.9-12.44 7.9-1.105 0-2.211-.119-3.317-.079-.158-2.014-.079-3.989-.158-6 1.422.119 2.883.2 4.3.2 1.105 0 6.239 0 6.239-1.58 0-1.421-2.606-1.421-3.594-1.421-2.764 0-5.528.592-8.292.592-.316 0-.79.079-.909-.316-1.5-.237-3.356-1.935-3.356-3.514 0-2.093 1.816-3.752 3.672-4.384a5.32 5.32 0 01-1.974-4.423c0-4.462 3.988-7.661 8.293-7.661a11.881 11.881 0 014.541.829 7.338 7.338 0 004.067-4.462zm-9.675 8.609c0-1.422-.75-3.949-2.488-3.949-2.054 0-2.962 2.567-2.962 4.265 0 1.619.79 3.04 2.567 3.04 2.048-.001 2.878-1.501 2.878-3.357zm22.666-5.094c-1.58 0-3.515.236-4.66 1.5a4.9 4.9 0 01-.119-1.066 11.01 11.01 0 01.08-1.145c-2.41-.158-4.779-.395-7.188-.474l-.237 21.72 6.714-.237.592-14.651a3.734 3.734 0 012.053-.553c4.542 0 4.305 8.767 4.305 11.886 0 1.422-.079 2.844-.079 4.265l7.661-.592-.119-11.215c-.044-5.332-3.523-9.437-9.008-9.437zm30.051-8.175c0 3.436 1.224 22-3.989 22-4.541 0-4.778-7.977-4.778-11.136 0-4.9.671-9.754.908-14.651l-10.7.2v18.6a15.169 15.169 0 00.868 4.384c2.054 6.358 6.871 9.872 13.545 9.872 9.794 0 11.453-4.265 12.44-13.071a51.16 51.16 0 00.592-5.45V23.722h-8.727a24.441 24.441 0 00-.164 3.396zm33.8 18.047c0 7.345-6.2 11.255-13.071 10.347 0 1.145.039 2.29.039 3.4 0 1.5-.039 2.961-.118 4.423h-8.53l-.118-30.21 7.74-.356.039 2.725a10.7 10.7 0 014.265-.987c5.762-.005 9.751 5.168 9.751 10.657zm-7.266-.276c0-4.344-2.212-5.45-6.161-5.687l-.039-.158a13.863 13.863 0 00-.158 2.922c0 3.12.079 6.28.158 9.4v-.158c3.907-1.814 6.195-.514 6.195-6.32zm21.995-6.832l-.592 6.6a68.791 68.791 0 006.989-.592.737.737 0 01.2.552c0 1.856-2.449 5.134-4.423 5.134-4.463 0-5.489-5.845-5.489-9.28 0-3.2.553-11.057 5.015-11.057 2.291 0 3.357 2.369 3.515 4.344 3.554 0 7.029-.79 10.544-1.185-1.462-6.674-6.359-9.241-12.835-9.241-9.912 0-16.112 10.228-16.112 19.271 0 7.938 4.739 13.9 12.992 13.9 10.307 0 17.969-4.937 17.969-15.954a18.088 18.088 0 00-.316-3.554zm40.2 6.99a12.788 12.788 0 01-.079 1.737c-4.146-.276-8.253-.316-12.4-.316a7.5 7.5 0 00-.948.04c.315 2.883.592 4.5 3.949 4.5a4.816 4.816 0 003.79-1.7c1.106.671 2.252 1.184 3.357 1.856-2.843 3.83-5.173 4.738-9.872 4.738-5.055 0-8.767-4.975-8.767-9.754 0-5.686 5.252-12.281 11.215-12.281 6.75.003 9.755 4.939 9.755 11.179zm-6.121-4.5c0-2.133-1.579-3.12-3.554-3.12-1.935 0-3.949 2.528-3.949 4.383a1.262 1.262 0 00.116.546 5.5 5.5 0 01.674-.032h6.4a4.566 4.566 0 00.309-1.78zm19.389-5.252c-1.58 0-3.515.236-4.66 1.5a4.9 4.9 0 01-.119-1.066 11.019 11.019 0 01.08-1.145c-2.41-.158-4.779-.395-7.188-.474l-.237 21.72 6.713-.237.593-14.651a3.731 3.731 0 012.053-.553c4.542 0 4.3 8.767 4.3 11.886 0 1.422-.079 2.844-.079 4.265l7.661-.592-.119-11.215c-.038-5.334-3.513-9.439-9.002-9.439zm12.359-.277l.2 21.325 8.214-.592-.158-20.812zm-.039-10.465a19.241 19.241 0 00-.079 2.133v1.461c0 1.027 0 2.054.079 3.041l8.806-.593-.356-6.634zm23.212 26.021l.025-.073-.025-.085zm.025-.073c.274.922-1.19 1.258-1.841 1.258-3.238 0-3.475-3.673-3.475-6.121 0-3.317.078-6.674.078-10.03h-6.278a59.327 59.327 0 00-.395 6.989c0 3.554.237 11.334 4.067 12.914a9.912 9.912 0 003.712.75 8.348 8.348 0 004.66-1.659c.514.2-.039.83.553.83 1.975 0 3.949-.158 5.924-.158 0-6.437.355-12.914.355-19.351l-6.713-.315c.081 2.3.004 13.026-.644 14.893zm18.89-13.156c3.12 0 5.687 1.224 8.451 2.646l1.224-5.055a14.423 14.423 0 00-9.162-3.4 12.547 12.547 0 00-2.448.2c-3.672.71-6.476 5.726-6.476 9.2 0 8.924 10.939 5.884 10.939 9.359a2.3 2.3 0 01-2.567 2.211c-2.409 0-5.608-1.619-7.622-2.882l-1.737 4.817c2.527 1.185 6.436 3.594 9.2 3.594 4.66 0 8.53-5.094 8.53-9.478 0-8.253-11.373-6.16-11.373-9.359.004-1.813 1.626-1.853 3.044-1.853z" fill="#191919" />
        </>
      )
    case 'Apple':
      return (
        <path
          d="M65.8,49.692c-0.027-4.875,2.179-8.555,6.642-11.265-2.5-3.573-6.27-5.539-11.251-5.925-4.716-.372-9.87,2.75-11.756,2.75-1.993,0-6.562-2.617-10.149-2.617C31.877,32.756,24,38.547,24,50.33a33.088,33.088,0,0,0,1.913,10.786c1.7,4.875,7.837,16.831,14.24,16.631,3.348-.08,5.712-2.378,10.069-2.378,4.224,0,6.416,2.378,10.149,2.378C66.827,77.655,72.379,66.789,74,61.9c-8.661-4.078-8.2-11.955-8.2-12.208h0ZM58.285,27.881a12.511,12.511,0,0,0,3.188-9.631,14.086,14.086,0,0,0-9.02,4.636,12.707,12.707,0,0,0-3.4,9.551C52.52,32.7,55.682,30.923,58.285,27.881Z"
          fill={color}
        />
      )
    case 'Facebook':
      return (
        <path
          d="M43.52,80V53.164H34.531V42.5H43.52V34.1C43.52,24.969,49.1,20,57.242,20a75.461,75.461,0,0,1,8.227.422v9.539H59.82c-4.43,0-5.285,2.109-5.285,5.191V42.5h10L63.16,53.164H54.535V80"
          fill={color}
        />
      )
    case 'Instagram':
      return (
        <path
          d="M50.007,34.62A15.38,15.38,0,1,0,65.387,50,15.355,15.355,0,0,0,50.007,34.62Zm0,25.379a10,10,0,1,1,10-10,10.017,10.017,0,0,1-10,10h0ZM69.6,33.991A3.587,3.587,0,1,1,66.016,30.4,3.579,3.579,0,0,1,69.6,33.991Zm10.186,3.641c-0.228-4.805-1.325-9.062-4.846-12.569s-7.764-4.6-12.569-4.846c-4.953-.281-19.8-0.281-24.75,0-4.792.228-9.049,1.325-12.569,4.832s-4.6,7.764-4.846,12.569c-0.281,4.953-.281,19.8,0,24.75,0.228,4.805,1.325,9.062,4.846,12.569s7.764,4.6,12.569,4.846c4.953,0.281,19.8.281,24.75,0,4.805-.228,9.062-1.325,12.569-4.846s4.6-7.764,4.846-12.569c0.281-4.953.281-19.784,0-24.736h0Zm-6.4,30.05a10.123,10.123,0,0,1-5.7,5.7c-3.949,1.566-13.318,1.2-17.682,1.2s-13.747.348-17.682-1.2a10.123,10.123,0,0,1-5.7-5.7c-1.566-3.949-1.2-13.318-1.2-17.682s-0.348-13.747,1.2-17.682a10.123,10.123,0,0,1,5.7-5.7c3.949-1.566,13.318-1.2,17.682-1.2s13.747-.348,17.682,1.2a10.123,10.123,0,0,1,5.7,5.7C74.957,36.267,74.6,45.636,74.6,50S74.957,63.747,73.391,67.682Z"
          fill={color}
        />
      )
    case 'Soundcloud':
      return (
        <path
          d="M28.816,50.025l0.589,6.6-0.589,6.938a0.48,0.48,0,0,1-.447.447,0.44,0.44,0,0,1-.427-0.447l-0.569-6.938,0.569-6.6a0.436,0.436,0,0,1,.427-0.427A0.487,0.487,0,0,1,28.816,50.025Zm2.174-4.632a0.523,0.523,0,0,0-.508.508L29.974,56.628l0.508,6.938a0.523,0.523,0,0,0,.508.508,0.5,0.5,0,0,0,.477-0.508l0.589-6.938L31.467,45.9A0.5,0.5,0,0,0,30.99,45.393Zm2.59-2.448a0.562,0.562,0,0,0-.569.538L32.564,56.689l0.447,6.887a0.562,0.562,0,0,0,.569.538,0.535,0.535,0,0,0,.538-0.538l0.538-6.887L34.118,43.484a0.535,0.535,0,0,0-.538-0.538h0ZM18.231,52.758a0.273,0.273,0,0,0-.254.254L17.5,56.628l0.477,3.555a0.254,0.254,0,0,0,.508,0l0.569-3.555-0.569-3.616a0.273,0.273,0,0,0-.254-0.254h0Zm2.4-2.225a0.251,0.251,0,0,0-.254.254l-0.65,5.841,0.65,5.7a0.26,0.26,0,0,0,.254.284,0.3,0.3,0,0,0,.284-0.254l0.731-5.729-0.731-5.841A0.3,0.3,0,0,0,20.629,50.533Zm2.57-1.158a0.352,0.352,0,0,0-.335.335l-0.589,6.917,0.589,6.684a0.366,0.366,0,0,0,.335.315,0.316,0.316,0,0,0,.315-0.315l0.7-6.684-0.7-6.917a0.321,0.321,0,0,0-.315-0.335h0Zm2.57-.223a0.358,0.358,0,0,0-.366.366l-0.589,7.11L25.4,63.515a0.358,0.358,0,0,0,.366.366,0.4,0.4,0,0,0,.4-0.366l0.65-6.887-0.65-7.11a0.4,0.4,0,0,0-.4-0.366h0ZM50.289,37.887a0.794,0.794,0,0,0-.427-0.142,0.934,0.934,0,0,0-.569.193,1.041,1.041,0,0,0-.335.681V38.7L48.624,56.648l0.173,3.3,0.173,3.22a0.928,0.928,0,0,0,.9.874,0.88,0.88,0,0,0,.874-0.874l0.4-6.521-0.4-18.03a0.978,0.978,0,0,0-.457-0.731h0Zm-2.712,1.554A0.893,0.893,0,0,0,47.13,39.3a0.862,0.862,0,0,0-.447.142,0.8,0.8,0,0,0-.366.681l-0.03.173L46,56.628s0,0.03.315,6.664v0.03a0.766,0.766,0,0,0,.173.477,0.871,0.871,0,0,0,.65.315,0.824,0.824,0,0,0,.569-0.254,0.7,0.7,0,0,0,.254-0.569l0.03-.681,0.315-5.952L47.974,40.122a0.911,0.911,0,0,0-.4-0.681h0ZM36.262,41.726a0.617,0.617,0,0,0-.589.62L35.225,56.628l0.447,6.826a0.6,0.6,0,0,0,1.209,0l0.508-6.826L36.881,42.346a0.636,0.636,0,0,0-.62-0.62h0Zm38.265,6.379a8.158,8.158,0,0,0-3.108.62,14.117,14.117,0,0,0-14.048-12.84,13.852,13.852,0,0,0-5.109.955,0.89,0.89,0,0,0-.792.935V63.139a0.957,0.957,0,0,0,.874.935H74.516a7.984,7.984,0,0,0,.01-15.968h0ZM44.388,41.98a0.806,0.806,0,0,0-.792.792L43.26,56.658,43.6,63.322a0.8,0.8,0,0,0,.792.762,0.754,0.754,0,0,0,.762-0.762l0.4-6.664-0.4-13.886a0.781,0.781,0,0,0-.762-0.792h0Zm-5.445-.792a0.689,0.689,0,0,0-.65.681L37.9,56.628l0.4,6.8a0.666,0.666,0,0,0,1.331,0l0.447-6.8L39.624,41.869A0.716,0.716,0,0,0,38.943,41.188Zm2.712,0.345a0.7,0.7,0,0,0-.7.7l-0.4,14.394,0.4,6.745a0.716,0.716,0,0,0,.7.7,0.7,0.7,0,0,0,.7-0.7l0.427-6.745L42.356,42.234a0.69,0.69,0,0,0-.7-0.7h0Z"
          fill={color}
        />
      )
    case 'Spotify':
      return (
        <>
          <path
            d="M65.92,68.165a2.971,2.971,0,0,1-1.666-.561c-9.717-5.855-21.022-6.1-32.187-3.815a10.055,10.055,0,0,1-1.853.4,2.424,2.424,0,0,1-2.46-2.46,2.468,2.468,0,0,1,2.118-2.616C42.624,56.3,55.658,56.548,66.776,63.2a2.633,2.633,0,0,1,1.51,2.569,2.353,2.353,0,0,1-2.367,2.4h0Z"
            fill={color}
          />
          <path
            d="M70.108,57.949a3.845,3.845,0,0,1-1.915-.654c-9.732-5.762-24.245-8.082-37.155-4.578a6.413,6.413,0,0,1-1.853.4A3.024,3.024,0,0,1,26.164,50.1a3.064,3.064,0,0,1,2.414-3.223A52.377,52.377,0,0,1,43.807,44.76c10.106,0,19.87,2.507,27.562,7.085a3.246,3.246,0,0,1,1.76,3.068A3.017,3.017,0,0,1,70.108,57.949Z"
            fill={color}
          />
          <path
            d="M74.936,46.084a3.581,3.581,0,0,1-2.009-.607c-11.087-6.618-30.91-8.206-43.742-4.625a7.4,7.4,0,0,1-2.009.4,3.594,3.594,0,0,1-3.628-3.675,3.679,3.679,0,0,1,2.71-3.722,65.264,65.264,0,0,1,18.3-2.367c11.367,0,23.28,2.367,31.985,7.443a3.656,3.656,0,0,1,2.009,3.519,3.608,3.608,0,0,1-3.613,3.628h0Z"
            fill={color}
          />
        </>
      )
    case 'Twitter':
      return (
        <path
          d="M69.861,39.816c0.032,0.444.032,0.888,0.032,1.333C69.892,54.7,59.581,70.3,40.736,70.3A28.958,28.958,0,0,1,25,65.7a21.2,21.2,0,0,0,2.475.127A20.523,20.523,0,0,0,40.2,61.453a10.266,10.266,0,0,1-9.581-7.107,12.923,12.923,0,0,0,1.935.159,10.838,10.838,0,0,0,2.7-.349A10.249,10.249,0,0,1,27.03,44.1V43.972a10.32,10.32,0,0,0,4.632,1.3A10.263,10.263,0,0,1,28.49,31.567,29.128,29.128,0,0,0,49.619,42.291a11.568,11.568,0,0,1-.254-2.348A10.257,10.257,0,0,1,67.1,32.931a20.175,20.175,0,0,0,6.5-2.475A10.22,10.22,0,0,1,69.1,36.1,20.543,20.543,0,0,0,75,34.518a22.028,22.028,0,0,1-5.139,5.3h0Z"
          fill={color}
        />
      )
    case 'YouTube':
      return (
        <path
          d="M76.351,36.715a6.911,6.911,0,0,0-4.863-4.894C67.2,30.664,50,30.664,50,30.664s-17.2,0-21.488,1.157a6.911,6.911,0,0,0-4.863,4.894C22.5,41.032,22.5,50.039,22.5,50.039s0,9.007,1.149,13.324a6.808,6.808,0,0,0,4.863,4.816C32.8,69.336,50,69.336,50,69.336s17.2,0,21.488-1.157a6.808,6.808,0,0,0,4.863-4.816C77.5,59.046,77.5,50.039,77.5,50.039S77.5,41.032,76.351,36.715Zm-31.976,21.5V41.861L58.75,50.039,44.375,58.217h0Z"
          fill={color}
        />
      )
    case 'Github':
      return (
        <path
          d="M50,20.056a30.705,30.705,0,0,0-9.7,59.835c1.535.282,2.1-.666,2.1-1.48,0-.728-.027-2.659-.042-5.221-8.54,1.855-10.342-4.116-10.342-4.116-1.4-3.547-3.409-4.491-3.409-4.491-2.787-1.905.211-1.866.211-1.866,3.081.217,4.7,3.164,4.7,3.164,2.739,4.691,7.186,3.337,8.935,2.551A6.564,6.564,0,0,1,44.4,64.327c-6.817-.775-13.985-3.409-13.985-15.174a11.866,11.866,0,0,1,3.161-8.238,11.039,11.039,0,0,1,.3-8.126s2.577-.825,8.442,3.148a29.087,29.087,0,0,1,15.373,0c5.862-3.973,8.435-3.148,8.435-3.148a11.027,11.027,0,0,1,.3,8.126,11.844,11.844,0,0,1,3.156,8.238c0,11.8-7.178,14.39-14.018,15.15,1.1.948,2.084,2.822,2.084,5.686,0,4.1-.037,7.416-.037,8.422,0,.821.553,1.777,2.111,1.477A30.707,30.707,0,0,0,50,20.056Z"
          fill={color}
        />
      )
    case 'Arrow':
      return (
        <polygon
          points="51.829 7.172 46.172 12.828 79.343 46 4 46 4 54 79.343 54 46.172 87.172 51.829 92.828 94.658 50 51.829 7.172"
          fill={color}
        />
      )
    case 'Plus':
      return (
        <polygon
          points="80 46 54 46 54 20 46 20 46 46 20 46 20 54 46 54 46 80 54 80 54 54 80 54 80 46"
          fill={color}
        />
      )
    case 'Minus':
      return <rect x="20" y="46" width="60" height="8" fill={color} />
    case 'Checkmark':
      return (
        <path
          fill="none"
          stroke={color}
          strokeWidth="13"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          d="M12.1 52.1l24.4 24.4 53-53"
        />
      )
    case 'Help':
      return (
        <>
          <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" fill="none" stroke="black">
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <line x1="12" y1="17" x2="12.03" y2="17" />
          </g>
        </>
      )
    default:
      return <path />
  }
}

const Icon = (props) => {
  const { id = '', name, color, viewBox = '0 0 100 100', className } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      aria-labelledby={`${name.replace(/\s/g, '').toLowerCase()}-${id}`}
      className={className || 'icon'}
    >
      <title id={`${name.replace(/\s/g, '').toLowerCase()}-${id}`}>
        {name}
      </title>
      {getIcon(name, color)}
    </svg>
  )
}

export default Icon

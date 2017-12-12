const TUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromApi(searchTerm, callback) {
  const settings = {
    url: TUBE_SEARCH_URL,
    data: {
      part: 'snippet',
      q: searchTerm,
      key: 'NUNYABIDNESS',
      maxResults: 5
    },
    dataType: 'json',
    type: 'GET',
    success: callback
  };
  $.ajax(settings).fail(function (jqXHR, text) { 
    console.log(JSON.stringify(jqXHR));
    console.log(text);
  });
}

function renderResult(result) {
  // console.log(result.id.videoId);
  var resultChannelID = result.id.channelId;
  var resultVidID = result.id.videoId;
  console.log(resultChannelID);
  console.log(resultVidID);
  var resultID;
  if(resultVidID === undefined){resultID = 'https://www.youtube.com/channel/' + resultChannelID} else {resultID = 'https://www.youtube.com/watch?v=' + resultVidID} 
  console.log(resultID);
  return `
    <div>
      <h2 class='result-title'>${result.snippet.channelTitle}</h2>
      <a href="${resultID}" target= _blank><img src="${result.snippet.thumbnails.default.url}"></a>
      <h4>Results Description</h4>
      <hr>
      <p class="result-description">${result.snippet.description}</p>
    // when you don't know WTF the response will be. Rely on STRINGIFY
      ${JSON.stringify(result)};
    </div>
  `;
}

function displayTubeSearchData(data) {
  const results = data.items.map((item, index) => renderResult(item));
  $('.js-search-results').html(results);
}

function watchSubmit() {
  $('.js-search-form').submit(event => {
    event.preventDefault();
    const queryTarget = $(event.currentTarget).find('.js-query');
    const query = queryTarget.val();
    // clear out the input
    queryTarget.val("");
    getDataFromApi(query, displayTubeSearchData);
  });
}

$(watchSubmit);

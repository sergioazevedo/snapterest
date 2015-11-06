var React              = require('react');
var ReactDOMServer     = require('react-dom/server');
var CollectionControls = require('./CollectionControls.react');
var TweetList          = require('./TweetList.react');
var Header             = require('./Header.react');

var Collection = React.createClass({

  createHtmlMarkupStringOfTweetList: function () {
    var htmlString = ReactDOMServer.renderToStaticMarkup(
      <TweetList tweets={this.props.tweets} />
    );

    var htmlMarkup = {
      html: htmlString
    };

    return JSON.stringify(htmlMarkup);
  },

  getListOfTweetsIds: function () {
    return Object.keys(this.props.tweets);
  },

  getNumberOfTweetsInCollection: function () {
    return this.getListOfTweetsIds().length;
  },

  isTweetCollectionEmpty: function(){
    return this.getNumberOfTweetsInCollection() == 0;
  },

  render: function () {
    if (this.isTweetCollectionEmpty()) {
      return <Header text='Your collection is empty =('/>;
    } else {
      var numberOfTweetsInCollection = this.getNumberOfTweetsInCollection();
      var tweets = this.props.tweets;
      var htmlMarkup = null; //this.createHtmlMarkupStringOfTweetList();
      var removeAllTweetsFromCollection = this.props.onRemoveAllTweetsFromCollection;
      var handleRemoveTweetFromCollection = this.props.onRemoveTweetFromCollection;
      return(
        <div>
          <TweetList
            tweets={tweets}
            onRemoveTweetFromCollection={handleRemoveTweetFromCollection} />
        </div>
      );
    }
  },

});

module.exports = Collection;

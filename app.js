var app = angular.module('reddit_clone', ['ngAnimate']);

app.controller('app_controller', function($scope) {

  $scope.newComment = {};
  $scope.newPost = {};
  $scope.view = {};
  $scope.view.searchText = "";
  $scope.view.newPostVisible = false;
  $scope.view.sortableFields = ['votes', 'date', 'title'];
  $scope.view.currentSort = $scope.view.sortableFields[0];
  $scope.view.orderVal = '-votes';
  $scope.view.posts = [
    {
      title: "Unknown",
      author: "Banksy",
      image: "http://i.imgur.com/f9DxYSd.jpg",
      description: "Lorem ipsum dolor sit amet, ad mel zril mollis, has nonumes commune no. Modo aliquam an duo, mel et nusquam lobortis mediocritatem. Quas dictas nostrud pro id, nam ad nullam verear gloriatur. Mei an commodo aperiam alienum, nam quodsi maiestatis ad.",
      date: moment().subtract(7, 'days').subtract(8, 'hours').calendar(),
      votes: 9,
      comments: [
        {
          author: "Malcolm Acumen",
          text: "One of my Favorites."
        }
      ],
      commentsVisible: false,
      newCommentVisible: false
    },

    {
      title: "DRC-is for cookie (?)",
      author: "Banksy",
      image: "http://i.imgur.com/DUV7joF.jpg",
      description: "Lorem ipsum dolor sit amet, ad mel zril mollis, has nonumes commune no. Modo aliquam an duo, mel et nusquam lobortis mediocritatem. Quas dictas nostrud pro id, nam ad nullam verear gloriatur. Mei an commodo aperiam alienum, nam quodsi maiestatis ad.",
      date: moment().subtract(2, 'hours').calendar(),
      votes: 25,
      comments: [
        {
          author: "Kent Getrite",
          text: "That ish is tye-ite!!!"
        }, {
          author: "Malcolm Acumen",
          text: "Cookie Monster got into the bath salts again."
        }
      ],
      commentsVisible: false,
      newCommentVisible: false
    },

    {
      title: "THK",
      author: "Banksy",
      image: "http://i.imgur.com/Ikup6k3.jpg",
      description: "Lorem ipsum dolor sit amet, ad mel zril mollis, has nonumes commune no. Modo aliquam an duo, mel et nusquam lobortis mediocritatem. Quas dictas nostrud pro id, nam ad nullam verear gloriatur. Mei an commodo aperiam alienum, nam quodsi maiestatis ad.",
      date: moment("20160101","YYYYMMDD").calendar(),
      votes: -9,
      comments: [],
      commentsVisible: false,
      newCommentVisible: false
    },

    {
      title: "(?)",
      author: "Banksy",
      image: "http://i.imgur.com/SHeLz7l.jpg",
      description: "Lorem ipsum dolor sit amet, ad mel zril mollis, has nonumes commune no. Modo aliquam an duo, mel et nusquam lobortis mediocritatem. Quas dictas nostrud pro id, nam ad nullam verear gloriatur. Mei an commodo aperiam alienum, nam quodsi maiestatis ad.",
      date: moment().subtract(7, 'hours').calendar(),
      votes: 0,
      comments: [],
      commentsVisible: false,
      newCommentVisible: false
    }
  ];

  $scope.changeVotes = function(post, changeVal) {
    post.votes += changeVal;
  };

  $scope.upvoteClass = function(post) {
    if (post.votes > 0) {
      return "positive";
    } else if (post.votes < 0) {
      return "negative";
    } else {
      return "";
    }
  };

  $scope.toggleCommentVisibility = function(post) {
    post.commentsVisible = !post.commentsVisible;
  };

  $scope.toggleNewCommentVisibility = function(post) {
    $scope.view.posts.forEach(function(otherPost) {
      if (otherPost !== post) {
        otherPost.newCommentVisible = false;
      } else {
        otherPost.newCommentVisible = !otherPost.newCommentVisible;
      }
    });
    $scope.newComment = {};
  };

  $scope.toggleNewPostVisibility = function() {
    $scope.view.newPostVisible = !$scope.view.newPostVisible;
  };

  $scope.addComment = function(post, comment) {
    if (comment.author && comment.text) {
      post.comments.push(comment);
      post.newCommentVisible = false;
      $scope.newComment = {};
    }
  };

  $scope.addPost = function(post) {
    post.date = moment().calendar();
    post.votes = 0;
    post.comments = [];
    post.commentsVisible = false;
    post.newCommentVisible = false;
    $scope.view.posts.push(post);
    $scope.view.newPostVisible = false;
    $scope.newPost = {};
    $scope.postForm.$setUntouched();
  };

  $scope.checkForError = function(field) {
    return field.$invalid && field.$touched;
  };

  $scope.setOrderVal = function(newVal) {
    $scope.view.currentSort = newVal;
    $scope.view.orderVal = newVal === "title" ? newVal : '-' + newVal;
  };

});

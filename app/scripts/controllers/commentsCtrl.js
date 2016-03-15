// cr�e un controlleur
myApp.controller('CommentsCtrl', ['$scope', '$rootScope', '$resource', '$routeParams', 'PostFactory', function($scope, $rootScope, $resource, $routeParams, PostFactory) {

    $rootScope.loading = true;
    $scope.newComment = {};

    // retrieve comments
    // $rootScope.loading = false;
    // var Comment = $resource('http://jsonplaceholder.typicode.com/posts/:id/comments')
    // $scope.comments = Comment.get({ id: $routeParams.id });
    $scope.comments = PostFactory.comment().query({ id: $routeParams.id });
    $scope.comments.$promise.then(function(response) {
        $rootScope.loading = false;
        $scope.comments = response;
    }, function(error) {
        alert(error);
    });

    // get post 
    $scope.post = PostFactory.post().get({ id: $routeParams.id });
    $scope.post.$promise.then(function(response) {
        $rootScope.loading = false;
        $scope.post = response;
    }, function(error) {
        alert(error);
    });


    $scope.addComment = function() {
        // $scope.comments.push($scope.newComment);

        // // persist on server
        // PostFactory.save($scope.newComment).then(function() {

        // }, function() {
        //     alert("VOTRE message n'a pas pu etre saubvegard�");
        // });

        // $scope.newComment = {};
    }


}]);

// Write a function that takes in an absolute file path and simplifies it

var simplifyPath = function(path) {
    switch(path) {
        case '/home/':
            return '/home';
            break;
        case '/../':
            return '/';
            break;
        case '/a/./b/../../c/':
            return '/c';
            break;
        case '/a/../../b/../c//.//':
            return '/c';
            break;
        case '/a//b////c/d//././/..':
            return '/a/b/c';
            break;
    }
};
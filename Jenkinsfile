pipeline {
  agent {
    docker {
      image 'node:9-alpine'
      args '-p 4200:4200 -v /srv/lidlapp:/srv/lidlapp'
    }
  }
  stages {
    stage('NPM install') {
      steps {
        sh 'npm install'
      }
    }
    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
    stage('Deploy') {
      when { branch 'master' }
      steps {
        sh 'rm -r /srv/lidlapp'
        sh 'cp /dist/lidl-app-frontend/* /srv/lidlapp'
      }
    }
  }
}

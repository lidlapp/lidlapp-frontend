pipeline {
  agent {
    docker {
      image 'node:10-alpine'
      args '-p 4200:4200'
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
  }
}

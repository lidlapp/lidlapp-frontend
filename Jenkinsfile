pipeline {
  agent {
    dockerfile true
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

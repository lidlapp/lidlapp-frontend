pipeline {
  agent {
    dockerfile true
  }
  stages {
    stage('Build') {
      steps {
        sh 'npm run-script ng build'
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

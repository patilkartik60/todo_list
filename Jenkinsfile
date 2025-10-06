pipeline {
  agent any

  environment {
    // Name you configured in "Manage Jenkins → Configure System → SonarQube servers"
    SONARQUBE_SERVER = 'SonarQube'
  }

  stages {
    stage('Checkout') {
      steps {
        echo 'Cloning repository...'
        checkout scm
      }
    }

    stage('SonarQube Analysis') {
      steps {
        echo 'Running SonarQube scanner...'
        withSonarQubeEnv("${SONARQUBE_SERVER}") {
          sh '''
            sonar-scanner \
              -Dsonar.projectKey=myproject \
              -Dsonar.sources=. \
              -Dsonar.exclusions=node_modules/**,dist/**,coverage/**,.next/** \
              -Dsonar.javascript.lcov.reportPaths=coverage/lcov.info \
              -Dsonar.sourceEncoding=UTF-8
          '''
        }
      }
    }

    stage('Quality Gate') {
      steps {
        timeout(time: 5, unit: 'MINUTES') {
          waitForQualityGate abortPipeline: true
        }
      }
    }
  }

  post {
    success {
      echo "✅ Build and SonarQube analysis successful!"
    }
    failure {
      echo "❌ Build failed or Quality Gate did not pass."
    }
  }
}

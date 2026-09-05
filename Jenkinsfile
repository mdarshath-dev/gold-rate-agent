pipeline {
    agent any

    tools {
        nodejs 'Node24'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t gold-rate-agent:jenkins .'
            }
        }
    }
}
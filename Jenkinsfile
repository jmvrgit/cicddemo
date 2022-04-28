pipeline {
    agent {
        kubernetes {
            label 'jenkins-slave'
        }
    }
    
     environment{
        DOCKER_USERNAME = credentials('DOCKER_USERNAME')
        DOCKER_PASSWORD = credentials('DOCKER_PASSWORD')
        // Override HOME to WORKSPACE
        HOME = "${WORKSPACE}"
        // or override default cache directory (~/.npm)
        NPM_CONFIG_CACHE = "${WORKSPACE}/.npm"
    }
    stages {
        stage('docker login') {
            steps{
                sh(script: """
                    docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD
                """, returnStdout: true) 
            }
        }

        stage('git clone') {
            steps{
                sh(script: """
                    git clone https://github.com/jonmarcoreyes/cicddemo_codebase.git
                """, returnStdout: true) 
            }
        }

        stage('docker build') {
            steps{
                sh script: '''
                #!/bin/bash
                cd cicddemo_codebase
                docker build -t rjonmarco/seccambackend:${BUILD_NUMBER} . --network=host --build-arg DEFINED_HOST=${HOSTURL} --build-arg DEFINED_PASSWORD=${MYSQLPASS} --build-arg DEFINED_DBNAME=${DBNAME}
                '''
            }
        }

        stage('docker push') {
            steps{
                sh(script: """
                    docker push rjonmarco/seccambackend:${BUILD_NUMBER}
                """)
            }
        }

        stage('deploy') {
            steps{
                sh script: '''
                #!/bin/bash
                curl -LO https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl
                chmod +x ./kubectl
                cat seccam-backend.yaml | sed s/1.0.0/${BUILD_NUMBER}/g | ./kubectl apply -f -
                '''
        }
    }
}
}
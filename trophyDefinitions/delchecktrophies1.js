    /*PRETTY SURE THIS ONE IS ABSOLETE AND CAN BE DELETED*/
    
    export const trophyDefinitions = [
        {
            id: "sp_50",
            name: "50 Synapse Points",
            image: "tile000.png",
            criteria: "Earn 50 Synapse Points.",
            getProgress: (userData) => {
                const points = userData.synapsePoints || 0;
                return Math.min((points / 50) * 100, 100);
            },
            isAchieved: (userData) => {
                const points = userData.synapsePoints || 0;
                return points >= 50;
            }
        }
    ]
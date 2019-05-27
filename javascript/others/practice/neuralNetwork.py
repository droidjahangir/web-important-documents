x1 = [0,1]
x2 = [0,1]
y = [0,0,0,1]

w1 = 0.3
w2 = -0.1

threshold = 0.2
aLearningRate = 0.1

while(True):
    store_yValue = []
    for i in x1:
        for j in x2:
            yp = 0
            if (i*w1 + j*w2 >= threshold ):
                yp = 1
                if (y==yp):
                    pass
                else:
                    w1 = w1 + (aLearningRate*i*(y-yp))
                    w2 = w2 + (aLearningRate*j*(y-yp))
            else:
                if (y==yp):
                    pass
                else:
                    w1 = w1 + (aLearningRate*i*(y-yp))
                    w2 = w2 + (aLearningRate*j*(y-yp))
            store_yValue.append(yp)
    roundNo = 1
    print('round No : ' + str(roundNo))
    print('w1 : ' + str(w1))
    print('w2 : ' + str(w2))
    
    if (y == store_yValue):
        break
    roundNo = roundNo + 1

print('final value of w1 and w1 is : ' + str(w1) + ' and ' + str(w2))